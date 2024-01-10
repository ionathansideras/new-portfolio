// Import necessary modules and assets
import React, { useEffect, useRef } from "react";
import avatar from "../assets/question-mark.png";
import cv from "../assets/Ionathan_Sideras_CV3.docx";
import downloadIcon from "../assets/download.png";
import chatIcon from "../assets/chat.png";
import { handleTransform } from "../helpers/handleTransform.js";
import useScrollEffect from "../hooks/useScrollEffect.jsx";
import { scrollToBottom } from "../helpers/handleScroll.js";

// Define the Resume component
export default function Resume({ resume }) {
    // Create a ref for the resume box
    const resumeBox = useRef(null);

    // Use the custom scroll effect hook and get the count value
    const {count} = useScrollEffect(resume, 5);

    // Use the useEffect hook to handle scroll events
    useEffect(() => {
        // Function to handle scroll events
        function handleScroll() {
            // Get the top position of the resume box
            let visible = resumeBox.current.getBoundingClientRect().top;
            // If the resume box is visible in the viewport, apply a transform
            if (visible < window.innerHeight) {
                resumeBox.current.style.transform = "translateX(0)";
            }
        }

        // Attach scroll and load event listeners when the component mounts
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Detach scroll and load event listeners when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    // Render the component
    return (
        <div className="resume-container" ref={resume}>
            <div className="resume-title">
                <h1 style={{ transform: handleTransform(1, 3, count) }}>
                    Resume
                </h1>
                <p style={{ transform: handleTransform(2, 4, count) }}>
                    Interested in working with me?
                </p>
            </div>
            <div className="resume-box" ref={resumeBox}>
                <img src={avatar} />
                <div className="resume-content">
                    <p>
                        If you still have any questions, feel free to contact
                        me. Additionally, you can download my resume below.
                    </p>
                    <div className="resume-buttons">
                        <a href={cv} download className="download-button">
                            <img src={downloadIcon} />
                            Download CV
                        </a>
                        <button
                            onClick={scrollToBottom}
                            className="contact-button"
                        >
                            <img src={chatIcon} />
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}