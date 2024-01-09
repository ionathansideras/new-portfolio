import React, { useRef } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin2.svg";
import gmail from "../assets/gmail.svg";
import x from "../assets/x2.svg";
import useScrollEffect from "../hooks/useScrollEffect";

// Defining the Contact functional component.
export default function Contact() {
    const contact = useRef(null);

    const {count} = useScrollEffect(contact, 4);

    return (
        <footer ref={contact}>
            <div className="contact">
                <a
                    href="https://www.linkedin.com/in/ionathan-sideras-072a60255"
                    target="_blank"
                >
                    <img
                        src={linkedin}
                        style={{
                            transform: count >= 1 ? "scale(1)" : "scale(0)",
                        }}
                    />
                </a>
                <a href="https://github.com/ionathansideras" target="_blank">
                    <img
                        src={github}
                        style={{
                            transform: count >= 2 ? "scale(1)" : "scale(0)",
                        }}
                    />
                </a>
                <a href="mailto:iona8ansideras@gmail.com" target="_blank">
                    <img
                        src={gmail}
                        style={{
                            transform: count >= 3 ? "scale(1)" : "scale(0)",
                        }}
                    />
                </a>
                <a href="https://twitter.com/IonathanSi28164" target="_blank">
                    <img
                        src={x}
                        style={{
                            transform: count >= 4 ? "scale(1)" : "scale(0)",
                        }}
                    />
                </a>
            </div>
            <p className="author">© 2024 Ionathan Sideras</p>
        </footer>
    );
}
