
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from '../pages/GetStarted';
import { Link } from "react-router-dom";
import "../styles.css";
import logo from "../assets/logo.png.png";
import ScrollRevealImage from "./ScrollRevealImage";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    navigate('/getstarted'); // Navigate to the "Get Started" page
  };

    return (
        <div className="hero">
          <h1>WalletShield</h1>
          <p>Empowering Students to Secure Their Crypto Transactions</p>
          <div className="hero-container">
                <p1>AI Driven Analysis. Blockchain Integration.</p1>

                <p2>Leverage AI-powered fraud detection and blockchain transparency to stay protected, learn smarter, and navigate crypto confidently. Gain educational insights powered by Google Gemini.</p2>
                <button className="hero-button" onClick={handleClick}>Analyze my Wallet</button>

            </div>
            <img src={logo} alt="Wallet Image" className="hero-image" />
            <ScrollRevealImage />
            
        </div>
        
      );
};

 
export default HeroSection;

//test