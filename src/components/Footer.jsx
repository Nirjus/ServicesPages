import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>xTop Limited</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a
            href="https://www.linkedin.com/in/nirjus-karmakar-b2bb0b26b/"
            target="_blank"
            rel="noreferrer"
          >
            Linkdin
          </a>
          <a href="https://github.com/Nirjus" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@nirjuskarmakar5379"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
