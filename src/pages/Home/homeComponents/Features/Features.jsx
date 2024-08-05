import "./features.css";

function Features({ icon, title, text }) {
  return (
    <div className="feature d-flex flex-column gap-2">
      <div className="icon rounded-circle d-flex justify-content-center align-items-center">
        {icon}
      </div>

      <div className="text-bx d-flex flex-column gap-3">
        <div className="title">
          <h2>{title}</h2>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default Features;
