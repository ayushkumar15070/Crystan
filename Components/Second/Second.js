"use client"
import React, { useState } from 'react';
import "./Second.css";
import Link from 'next/link';
import Third from "@/Components/Third/Third"; // Import the Third component

const Second = () => {
    // State to store the current index of heading and background
    const [currentIndex, setCurrentIndex] = useState(0)

    // Array of headings (You can edit these headings)
    const headings = [
        ['Your journey', 'your eclipse'], // Heading 1
        ['A vortex of', 'power and', 'precision'],  // Heading 2
        ['Nebula', 'Beyond the', 'ordinary'], // Heading 3
    ];

    // Array of background images (You can edit these paths)
    const backgrounds = [
        "/Eclipse/Eclipse1.jpg", // Background 1
        "/Vortex/Vortex1.jpg", // Background 2
        "/Nebula/Nebula1.jpg", // Background 3
    ];

    const buttoncontent = [
        "Eclipse Details",
        "See Your Vortex",
        "Limitless Nebula",
    ];

    // Function to handle right button click
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
    };

    // Function to handle left button click
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + headings.length) % headings.length);
    };

    // Function to handle the "charger details" button click
    const handleChargerDetailsClick = () => {
        // Determine the index of the clicked button
        const clickedIndex = currentIndex;

        // Redirect to the Third component, passing the clicked index as a query parameter
        window.location.href = "#crystan";
    };

    return (
        <div
            className='second-hero-section'
            style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}  // Dynamic background
        >
            <div className="headings">
                {/* Dynamic headings */}
                <h1>{headings[currentIndex][0]}</h1>
                <h1>{headings[currentIndex][1]}</h1>
                <h1>{headings[currentIndex][2]}</h1>
            </div>
            <div className="buttons">
                {/* Original "charger details" button */}
                <button className='btn charger-details-btn' onClick={handleChargerDetailsClick}>{buttoncontent[currentIndex]}</button>
            </div>
            <div className="navigation-buttons">
                {/* Left and Right navigation buttons */}
                <button className='arrow-btn' onClick={handleLeftClick}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow">
                    <path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
                </svg></button>
                <button className='arrow-btn' onClick={handleRightClick}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow">
                    <path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
                </svg></button>
            </div>
        </div>
    );
}

export default Second;