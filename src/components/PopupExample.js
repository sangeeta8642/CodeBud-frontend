import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PopupExample() {
    const [showPopup, setShowPopup] = useState(false);

    // Function to toggle the visibility of the pop-up
    function togglePopup() {
        setShowPopup(!showPopup);
    }

    return (
        <div>
            {/* <button onClick={togglePopup}>Open Popup</button> */}
            
            {showPopup && <Popup onClose={togglePopup} />}
        </div>
    );
}

// Popup component
function Popup({ onClose }) {
    return (
        <div className="popup">
            <div className="popup-content">
                {/* <Link to='/login' /> */}
                <h2>
                <button className="close-button" onClick={onClose}>X</button>

                </h2>
                <h2>Popup Content</h2>
                <p>This is the content of the popup.</p>
            </div>
        </div>
    );
}

export default PopupExample;
