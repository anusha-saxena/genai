import React, { useState } from 'react';
import '../styles.css'; // Optional: Add CSS for styling

function GetStarted() {
    const [file, setFile] = useState(null);
    const [apiLink, setApiLink] = useState('');
    const [message, setMessage] = useState('');

    // Handle file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle API link input
    const handleApiLinkChange = (e) => {
        setApiLink(e.target.value);
    };

    // Handle file upload submission
    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please upload a valid file.');
            return;
        }
        setMessage(`File "${file.name}" uploaded successfully!`);
    };

    // Handle API link submission
    const handleApiSubmit = (e) => {
        e.preventDefault();
        if (!apiLink) {
            setMessage('Please enter a valid API link.');
            return;
        }
        setMessage(`API link "${apiLink}" submitted successfully!`);
    };

    return (
        <div className="get-started">
            <main className="upload-section">
                <h1>Upload Your Wallet Transaction Data</h1>
                <p>Securely analyze your transaction history for anomalies, risks, and educational insights.</p>
                <div className="file-upload-container">
                    <label htmlFor="file-input" className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i> {}
                        <span>Select File to Upload</span>
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        accept=".json"
                        onChange={handleFileChange}
                        style={{ display: 'none' }} // Hide the input box
                    />
                    <p>Accepted file type: JSON. Max file size: 10MB</p>
                    <button onClick={handleUpload} className="upload-button">Upload File</button>
                </div>

                <div className="api-upload-container">
                    <p>Insert API Link</p>
                    <input
                        type="text"
                        placeholder="Enter your API link here"
                        value={apiLink}
                        onChange={handleApiLinkChange}
                        className="api-input"
                    />
                    <button onClick={handleApiSubmit} className="api-button">Submit API Link</button>
                </div>

                <p className="note">
                    Users can often download wallet transaction history in JSON format through blockchain explorers or APIs.
                </p>

                {message && <p className="message">{message}</p>}
            </main>
        </div>
    );
}

export default GetStarted;


