#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

async function replaceWithOptimized() {
    console.log('🔄 Replacing original images with optimized versions...\n');

    const optimizedDir = 'src/assests/optimized';
    const backupDir = 'src/assests/backup-original';

    // Create backup directory
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    try {
        // Get all subdirectories in optimized folder
        const optimizedSubDirs = fs.readdirSync(optimizedDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        let replacedCount = 0;
        let backupCount = 0;

        for (const subDir of optimizedSubDirs) {
            const optimizedPath = path.join(optimizedDir, subDir);
            const originalPath = path.join('src/assests', subDir);
            const backupPath = path.join(backupDir, subDir);

            if (!fs.existsSync(originalPath)) {
                console.log(`⚠️  Original directory not found: ${originalPath}`);
                continue;
            }

            // Create backup subdirectory
            if (!fs.existsSync(backupPath)) {
                fs.mkdirSync(backupPath, { recursive: true });
            }

            console.log(`📁 Processing ${subDir}...`);

            // Get optimized files (exclude WebP for now)
            const optimizedFiles = fs.readdirSync(optimizedPath)
                .filter(file => !file.endsWith('.webp'))
                .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

            for (const fileName of optimizedFiles) {
                const optimizedFilePath = path.join(optimizedPath, fileName);
                const originalFilePath = path.join(originalPath, fileName);
                const backupFilePath = path.join(backupPath, fileName);

                if (fs.existsSync(originalFilePath)) {
                    // Backup original
                    fs.copyFileSync(originalFilePath, backupFilePath);
                    backupCount++;
                    
                    // Replace with optimized
                    fs.copyFileSync(optimizedFilePath, originalFilePath);
                    replacedCount++;

                    const originalSize = fs.statSync(backupFilePath).size;
                    const optimizedSize = fs.statSync(originalFilePath).size;
                    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
                    
                    console.log(`  ✅ ${fileName}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% smaller)`);
                } else {
                    console.log(`  ⚠️  Original file not found: ${fileName}`);
                }
            }
        }

        console.log('\n📊 REPLACEMENT SUMMARY:');
        console.log(`   Files backed up: ${backupCount}`);
        console.log(`   Files replaced: ${replacedCount}`);
        console.log(`   Backup location: ${backupDir}`);
        
        console.log('\n🎉 Image replacement complete!');
        console.log('\n💡 NEXT STEPS:');
        console.log('1. Test your website to ensure all images display correctly');
        console.log('2. Consider using WebP images for modern browsers');
        console.log('3. Update image references to use Next.js Image component');
        console.log('4. If satisfied, you can delete the backup folder');
        console.log(`5. WebP versions are available in: ${optimizedDir}`);

    } catch (error) {
        console.error('❌ Error replacing images:', error);
        process.exit(1);
    }
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the replacement
replaceWithOptimized();