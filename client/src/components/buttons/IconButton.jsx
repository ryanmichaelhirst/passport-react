import React from "react";

const IconButton = ({ app }) => {
    const { img, href, alt, color, txt, name } = app;

    return (
        <a href={href}
           className="btn login-btn"
           style={{ backgroundColor: color, margin: 5, display: "block" }}
           title={txt}
        >
            <img src={img} alt={alt} className="btn-icon" />
            <span className="btn-txt">{name.toUpperCase()} Login</span>
        </a>
    );
};

export default IconButton;