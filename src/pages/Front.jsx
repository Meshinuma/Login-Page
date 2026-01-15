import "./Front.css";
import Ktv from "../assets/ktv";
import Food from "../assets/food";
import Samg from "../assets/samg";

function Front() {
  return (
    <div className="service-page">
      {/* Header */}
      <div className="header">
        <button className="back-btn">← Back</button>
        <h2>Select a Service</h2>
      </div>

      {/* Services */}
      <div className="services">
        <div className="service-card">
          <Food className="icon" />
          <p>FOOD</p>
        </div>

        <div className="service-card">
          <Samg className="icon" />
          <p>SAMGYUPSAL</p>
        </div>

        <div className="service-card">
          <Ktv className="icon" />
          <p>KTV</p>
        </div>
      </div>

      {/* Bottom Button */}
      <button className="next-btn" disabled>
        Next
      </button>
    </div>
  );
}

export default Front;
