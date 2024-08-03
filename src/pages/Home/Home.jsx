// Importing styles and assets
import "./home-page.css";
import { LuPenTool } from "react-icons/lu";
import { GiElectric } from "react-icons/gi";
import { FiDollarSign } from "react-icons/fi";
import Features from "./homeComponents/Features/Features";
import AboutInfo from "./homeComponents/AboutInfo/AboutInfo";
import "./responsive.css";

const Home = () => {
  // Array of feature objects to be displayed
  const featureDetails = [
    {
      icon: <LuPenTool />,
      title: "Stunning Website Designs",
      description: `At Codiify, we create visually striking websites that captivate and engage users. Our expert team ensures each website is aesthetically pleasing and functional, leaving a lasting impression.`,
    },
    {
      icon: <GiElectric />,
      title: "Timely Delivery",
      description: `we deliver high-quality websites within a short time frame. Our efficient processes and commitment to deadlines ensure your project is ready when you need it.`,
    },
    {
      icon: <FiDollarSign />,
      title: "Cost Efficiency",
      description: `we offer top-notch web development services at competitive prices. Our streamlined approach provides exceptional value without compromising on quality.`,
    },
  ];

  return (
    // About section
    <section className="about my-4">
      <div className="about-container p-4 m-auto d-flex flex-column gap-3">
        <AboutInfo />
        <div className="features d-flex gap-3">
          {/* Mapping over featureDetails array to render each feature */}
          {featureDetails.map((feature, index) => (
            <Features
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
