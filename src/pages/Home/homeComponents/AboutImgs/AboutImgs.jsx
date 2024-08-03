import "./about-img.css";

function AboutInfo({ img, alt }) {
  return (
    <div className="img rounded-circle">
      <img src={img} alt={alt} className="rounded-circle" />
    </div>
  );
}

export default AboutInfo;
