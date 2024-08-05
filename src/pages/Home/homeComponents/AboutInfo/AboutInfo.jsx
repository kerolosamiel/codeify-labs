import AbdallahImg from "../../../../assets/abdalla.jpg";
import KerolosImg from "../../../../assets/kero.jpg";
import AboutImgs from "../AboutImgs/AboutImgs";
import "./about-info.css";
import { Outlet, Link } from "react-router-dom";

function AboutInfo() {
  // Array of owners's images objects to be displayed
  const onwersImgs = [
    { img: AbdallahImg, alt: "Abdalla Shaker" },
    { img: KerolosImg, alt: "KerolosAmiel" },
  ];

  return (
    <div className="text-bx d-flex flex-column gap-3">
      <div className="title">
        <h1>Why Codiify ?</h1>
      </div>

      <div className="separator-line rounded mb-2"></div>

      <div className="info d-flex gap-4">
        <p>
          Hi, I’m <Link to="abdalla">Abdalla Shaker</Link> and together with{" "}
          <Link to="kerolos">Kerolos Amiel</Link>, we create websites for
          people, bringing their ideas to life online. We believe building web
          applications should be quick, easy and accessible to everyone.
          <br />
          Read<Link to="full-story"> the full story</Link>
        </p>

        <div className="image-sec d-flex gap-3">
          {onwersImgs.map((image, index) => (
            <AboutImgs img={image.img} alt={image.alt} key={`img-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
