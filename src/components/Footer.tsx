import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "200px",
          top: "180px",
        }}
      >
        <div className="wrapper">
          <div className="rainbow">
            <span></span>
          </div>
          <div className="nyan-cat">
            <div className="feet"></div>
            <div className="tail">
              <span></span>
            </div>
            <div className="body"></div>
            <div className="head"></div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="iconCont">
          <a href="https://www.linkedin.com/in/pedro-fanelli/" target="_blank">
            <img className="icon" src="src/assets/linkedin.png" alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/pedrofanelli" target="_blank">
            <img className="icon" src="src/assets/github.png" alt="GitHub Icon" />
          </a>
        </div>
        <div className="contactFoot">Contact Information</div>
        <div className="contactInfo">pedrofanelli1@gmail.com <br /> +54 9 291 4473654 <br /> Bahía Blanca, Buenos Aires, Argentina</div>
        <div style={{textAlign:"center", opacity:"0.5", userSelect:"none", marginTop:"15px"}}>Created by Pedro José Fanelli Ederra</div>
      </div>
    </>
  );
};

export default Footer;
