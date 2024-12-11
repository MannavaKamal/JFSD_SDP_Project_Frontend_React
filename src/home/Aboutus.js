import React from "react";
import tourisumimg from '../projectcss/Aboutus.jpg';  // You can change the image if you want.
import { Link } from "react-router-dom"; // Import Link

const Aboutus = () => {
  const brandNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#8c5b3f",
  };

  const navLinkItemStyle = {
    margin: "0 1rem",
    cursor: "pointer",
    color: "#8c5b3f",
  };

  const heroSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "120vh",
    position: "relative",
    color: "#8c5b3f",
    textAlign: "center",
    marginTop: "0",
    paddingTop: "4rem",
    width: "100vw",
    background: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80') no-repeat center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    position: "relative",
    color:"blue"
  };

  const contentHeadingStyle = {
    fontSize: "3rem",
    marginBottom: "1rem",
    color:"blue"

  };

  const contentParagraphStyle = {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    color:"blue"

  };

  const joinNowButtonStyle = {
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#e66a4c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const imageContainerStyle = {
    width: "80%",
    textAlign: "center",
    marginBottom: "1rem",
  };

  const imageStyle = {
    width: "100%",
    maxHeight: "500px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f6e6cf",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const navLinksStyle = {
    display: "flex",
    listStyleType: "none",
    gap: "1rem",
    margin: 0,
  };

  const buttonStyle = {
    textDecoration: "none",
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "20px",
    backgroundColor: "#ff7f50",
    color: "#fff",
    border: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "inline-block",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f4511e",
  };

  const hoverEffect = {
    ":hover": {
      backgroundColor: "#f4511e",
      transform: "scale(1.05)",
    },
  };
  return (
    <>
      <nav style={navbarStyle}>
        <div style={brandNameStyle}>ExploreEase</div>
        <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={buttonStyle}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus"  style={{ ...buttonStyle, ...activeButtonStyle }} >
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contactus" style={buttonStyle}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/tourist/signup" style={buttonStyle}>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" style={buttonStyle}>
            Login
          </Link>
        </li>>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
          <li style={navLinkItemStyle}></li>
        </ul>
      </nav>

      <div style={heroSectionStyle}>
        <div style={imageContainerStyle}>
          <img
            src={tourisumimg}
            alt="Travel Destination"
            style={imageStyle}
          />
        </div>
        <div style={contentStyle}>
          <h1 style={contentHeadingStyle}>About ExploreEase</h1>
          <p style={contentParagraphStyle}>
            ExploreEase is a premier travel management platform designed to offer travelers an easy and seamless booking experience. From exclusive travel plans to luxurious hotel rooms, we aim to help you explore the world at your own pace.
          </p>
          <p style={contentParagraphStyle}>
            Our platform allows you to book travel packages, plan itineraries, and find the perfect accommodation for your trip. Whether you are looking for a short getaway or a long vacation, ExploreEase has something for everyone.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Aboutus;
