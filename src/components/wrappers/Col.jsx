import React from "react";

const Col = ({ children, style, className }) => {
    return (
        <div className={`col ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Col;