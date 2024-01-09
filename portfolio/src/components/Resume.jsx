import React, { useEffect, useRef } from "react";
import avatar from "../assets/question-mark.png";
import cv from "../assets/Ionathan_Sideras_CV3.docx";
import downloadIcon from "../assets/download.png";
import chatIcon from "../assets/chat.png";
import { handleTransform } from "../helpers/handleTransform.js";
import useScrollEffect from "../hooks/useScrollEffect.jsx";
import { scrollToBottom } from "../helpers/handleScroll.js";

export default function Resume({ resume }) {
    const resumeBox = useRef(null);

    const {count} = useScrollEffect(resume, 5);

    useEffect(() => {
        // Function to handle scroll events
        function handleScroll() {
            let visible = resumeBox.current.getBoundingClientRect().top;
            // Adjust styling based on visibility
            if (visible < window.innerHeight) {
                resumeBox.current.style.transform = "translateX(0)";
            }
        }

        // Attach scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Detach scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
