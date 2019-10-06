import React from "react";
import IconLink from "../buttons/IconLink";
import Github from "../../res/footer-github.png";
import YouTube from "../../res/footer-youtube.png";

const Footer = () => {
    return (
        <div className="footer">
            <span>
                Developed by RyanMichael Hirst © 2019
            </span>
            <IconLink
                href={"https://github.com/rmbh4211995/passport-react"}
                icon={Github}
                title="Github"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
            <IconLink
                href={"https://youtu.be/A23O4aUftXk"}
                icon={YouTube}
                title="YouTube"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
        </div>
    );
};

export default Footer;