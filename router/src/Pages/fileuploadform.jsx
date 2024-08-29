import React, { useState } from 'react';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    const allowedExtensions = /(\.jpg|\.jpeg|\.pdf|\.doc)$/i;

    // Reset error message
    setErrorMessage('');

    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileSize = selectedFile.size;

      // Check file size
      if (fileSize > maxSize) {
        setErrorMessage('File size exceeds 5MB. Please upload a smaller file.');
        setFile(null); // Reset file state
        return;
      }

      // Check file type
      if (!allowedExtensions.exec(fileName)) {
        setErrorMessage('Invalid file type. Please upload a .jpg, .jpeg, .pdf, or .doc file.');
        setFile(null); // Reset file state
        return;
      }

      // If file is valid, set it to state
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      // Handle form submission, e.g., send file to server
      console.log('File ready to be submitted:', file);
      // Here, you'd typically send the file to your server using fetch or axios
    } else {
      setErrorMessage('Please select a valid file before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileUpload">Upload your file or image:</label>
      <input type="file" id="fileUpload" onChange={handleFileChange} />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default FileUploadForm;
