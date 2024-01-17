import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Link to='quizzes'>
                    <FaQuestionCircle size={40} />
                </Link>
                <p>Made by Kerolos in 2024</p>
            </div>
        </footer>
    )
}