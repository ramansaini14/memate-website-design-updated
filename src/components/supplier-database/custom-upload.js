import React, { useEffect, useState, useRef } from 'react';

const UploadIconSupplier = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/uploadicon.svg";

const CustomUpload = ({ upload_file, setUploadFile, existingImage }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    if (upload_file) {
      const objectUrl = URL.createObjectURL(upload_file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else if (existingImage) {
      setPreview(existingImage);
    } else {
      setPreview(null);
    }
  }, [upload_file, existingImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadFile(file);
    }
  };

  const handleClickUploadArea = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`upload-container upload-containerWrapper `}
      style={{
        border: "2px dashed #ccc",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        cursor: "pointer"
      }}
      onClick={handleClickUploadArea}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />

           <>
            <img
            src={preview || UploadIconSupplier}
            alt="Logo Preview"
            className="upload-icon"
            style={{ width: "40px", height: "40px", marginBottom: "10px" }}
          />
        <p className='dragAndDropText'>
            <strong>Click to upload logo</strong> or drag and drop
          </p>
          <p className='dragAndDropText'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
           </>




      {/* {preview ? (
        <img
          src={preview}
          alt="Logo Preview"
          className="preview-image"
          style={{ maxWidth: "100%", maxHeight: "150px", marginBottom: "10px" }}
        />
      ) : (
        <>
          <img
            src={UploadIconSupplier}
            alt="Upload Icon"
            className="upload-icon"
            style={{ width: "40px", height: "40px", marginBottom: "10px" }}
          />
          <p className='dragAndDropText'>
            <strong>Click to upload logo</strong> or drag and drop
          </p>
          <p className='dragAndDropText'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </>
      )} */}
    </div>
  );
};

export default CustomUpload;
