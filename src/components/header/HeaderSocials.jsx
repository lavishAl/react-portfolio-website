import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/1ajtaylor/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/lavishAl">
          <FaGithub />
        </a>
    </div>
  );
};

export default HeaderSocials;
