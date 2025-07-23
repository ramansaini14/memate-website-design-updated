#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    const sourceDir = 'src/assests';
    const outputDir = 'src/assests/optimized';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        // Find all image directories
        const imageDirectories = [
            'src/assests/blog-images',
            'src/assests/icons',
            'src/assests/images',
            'src/assests/industry-images',
            'src/assests/menu-images'
        ].filter(dir => fs.existsSync(dir));

        let totalSizeBefore = 0;
        let totalSizeAfter = 0;
        let processedFiles = 0;

        for (const dir of imageDirectories) {
            const dirName = path.basename(dir);
            const outputSubDir = path.join(outputDir, dirName);
            
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }

            console.log(`📁 Processing ${dir}...`);

            // Optimize PNG files
            const pngFiles = await imagemin([`${dir}/*.png`], {
                destination: outputSubDir,
                plugins: [
                    imageminPngquant({
                        quality: [0.6, 0.8], // 60-80% quality
                        strip: true // Remove metadata
                    })
                ]
            });

            // Optimize JPG files
            const jpgFiles = await imagemin([`${dir}/*.{jpg,jpeg}`], {
                destination: outputSubDir,
                plugins: [
                    imageminMozjpeg({
                        quality: 80, // 80% quality
                        progressive: true
                    })
                ]
            });

            // Convert to WebP (both PNG and JPG)
            const webpFiles = await imagemin([`${dir}/*.{png,jpg,jpeg}`], {
                destination: outputSubDir,
                plugins: [
                    imageminWebp({
                        quality: 80,
                        method: 6 // Better compression
                    })
                ]
            });

            // Calculate file sizes
            [...pngFiles, ...jpgFiles].forEach(file => {
                const originalPath = file.sourcePath;
                const optimizedPath = file.destinationPath;
                
                if (fs.existsSync(originalPath) && fs.existsSync(optimizedPath)) {
                    const originalSize = fs.statSync(originalPath).size;
                    const optimizedSize = fs.statSync(optimizedPath).size;
                    
                    totalSizeBefore += originalSize;
                    totalSizeAfter += optimizedSize;
                    processedFiles++;

                    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
                    const fileName = path.basename(originalPath);
                    
                    console.log(`  ✅ ${fileName}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% smaller)`);
                }
            });

            console.log(`  🌟 Created ${webpFiles.length} WebP versions\n`);
        }

        // Show summary
        const totalSavings = ((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(1);
        console.log('📊 OPTIMIZATION SUMMARY:');
        console.log(`   Files processed: ${processedFiles}`);
        console.log(`   Original size: ${formatBytes(totalSizeBefore)}`);
        console.log(`   Optimized size: ${formatBytes(totalSizeAfter)}`);
        console.log(`   Total savings: ${formatBytes(totalSizeBefore - totalSizeAfter)} (${totalSavings}%)`);
        console.log(`\n🎉 Image optimization complete! Optimized images saved in: ${outputDir}`);
        
        console.log('\n💡 NEXT STEPS:');
        console.log('1. Review the optimized images in the /optimized folder');
        console.log('2. Replace original images with optimized versions if satisfied');
        console.log('3. Consider using WebP format for modern browsers');
        console.log('4. Update your image references to use Next.js Image component for better performance');

    } catch (error) {
        console.error('❌ Error optimizing images:', error);
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

// Run the optimization
optimizeImages();