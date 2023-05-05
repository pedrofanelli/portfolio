import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          height: "200px",
          top: "150px",
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
          <img id="linkedin" src="src/assets/linkedin-logo.png" alt="" />
          <div>Hola</div>
          <div>Hola</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
