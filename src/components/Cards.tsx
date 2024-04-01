import React from "react";
import CardImage from '../assets/Frame 2371.jpeg';
import "../css/card.css";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img">
          <img src={CardImage} alt="" /> 
        </div>
        <div className="card-info">
          <h4 className="card-title">Обзор устаревших смартфонов</h4>
          <p className="card-txt">
            Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus risus viverra
            enim nunc.
          </p>
          <a href="#" className="card-link"> 
            <p className="link-text">Смотреть {">"}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
