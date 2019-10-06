import React from "react";

const GradientButton = ({ app }) => {
    const { img, href, alt, colors, txt, name } = app;

    const style = {
        margin: 5,
        display: "block",
        background: `radial-gradient(circle farthest-corner at 35% 90%, ${colors.leftBot}, transparent 50%),
            radial-gradient(circle farthest-corner at 0 140%, ${colors.leftBot}, transparent 50%),
            radial-gradient(ellipse farthest-corner at 0 -25%, ${colors.leftTop}, transparent 50%),
            radial-gradient(ellipse farthest-corner at 20% -50%, ${colors.leftTop}, transparent 50%),
            radial-gradient(ellipse farthest-corner at 100% 0, ${colors.rightTop}, transparent 50%),
            radial-gradient(ellipse farthest-corner at 60% -20%, ${colors.rightTop}, transparent 50%),
            radial-gradient(ellipse farthest-corner at 100% 100%, ${colors.rightBot}, transparent),
            ${colors.baseCoat}`
    };

    return (
        <a
            href={href}
            className="btn login-btn"
            style={style}
            title={txt}
        >
            <img src={img} alt={alt} className="btn-icon" />
            <span className="btn-txt">{name.toUpperCase()} Login</span>
        </a>
    );
};

export default GradientButton;