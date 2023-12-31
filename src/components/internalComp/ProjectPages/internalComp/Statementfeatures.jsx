import "./styles/statement-features.css";

function StatementFeature(props) {

  return (
    <div className="feature-card">
      <div
        className="feat-banner"
        style={{ backgroundColor: props.banner }}
      ></div>
      <div className="feat-text-wrapper">
      <h2 className="feat-title">{props.title}</h2>
      <p className="feat-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default StatementFeature;