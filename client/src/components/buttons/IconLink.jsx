import React from "react"

const IconLink = ({ href, icon, title, className, buttonStyle }) => {
    return (
        <button
            style={buttonStyle}
            onClick={() => window.open(href, '_blank')}
            title={title}
        >
            <img src={icon} alt={title} className={className} />
        </button>
    );
};

export default IconLink;