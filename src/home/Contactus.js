import React from "react";
import tourisumimg from '../projectcss/contactus.jpg';  // You can change the image if you want.
import { Link } from "react-router-dom"; // Import Link

const ContactUs = () => {
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

  

  const heroSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150vh", // Adjusted for a full-page view
    background: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80') no-repeat center center",

    color: "#8c5b3f",
    textAlign: "center",
    paddingTop: "5rem", // Added space to avoid navbar overlap
  };

  const contentStyle = {
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
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

  const contactDetailsStyle = {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    lineHeight: "1.8",
    color:"blue"
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
          <Link to="/aboutus" style={buttonStyle}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contactus"  style={{ ...buttonStyle, ...activeButtonStyle }}>
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
        </li>
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
          <h1 style={contentHeadingStyle}>Contact Us</h1>
          <p style={contentParagraphStyle}>
            We’d love to hear from you! If you have any questions, feedback, or concerns, please reach out to us via the following contact details:
          </p>
          <div style={contactDetailsStyle}>
            <p><strong>Email:</strong> 2200032973@kluniversity.in</p>
            <p><strong>Phone:</strong> 7207447946</p>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default ContactUs;
