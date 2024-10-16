import "../scss/footer.scss"
import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright by Clarusway {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
