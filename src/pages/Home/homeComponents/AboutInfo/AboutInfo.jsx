import AbdallahImg from "../../../../assets/abdalla.jpg";
import KerolosImg from "../../../../assets/kero.jpg";
import AboutImgs from "../AboutImgs/AboutImgs";
import "./about-info.css";

function AboutInfo() {
  // Array of owners's images objects to be displayed
  const onwersImgs = [
    { img: AbdallahImg, alt: "Abdalla Shaker" },
    { img: KerolosImg, alt: "KerolosAmiel" },
  ];

  return (
    <div className="info d-flex gap-4">
      <div className="text-bx d-flex flex-column gap-4">
        <div className="title">
          <h1>Why Codiify ?</h1>
        </div>

        <div className="separator-line rounded w-75"></div>

        <p>
          {/* Remeber to come back */}
          Hi, I’m Abdalla Shaker and together with Kerolos Amiel, we create
          websites for people, bringing their ideas to life online. We believe
          building web applications should be quick, easy and accessible to
          everyone. Read the full story
        </p>
      </div>

      <div className="image-sec d-flex gap-3">
        {onwersImgs.map((image, index) => (
          <AboutImgs img={image.img} alt={image.alt} key={`img-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default AboutInfo;
