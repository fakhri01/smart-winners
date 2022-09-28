import './cardOne.css'

const CardOne = ({img, title, linkText, text}) => {
  return (
    <div className="card-one d-flex align-items-center mb-3">
      <img src={img} alt="Card Image" />
      <div className="card-one-content">
        <div className="content-header d-flex justify-content-between">
          <h3>{title}</h3>
          <a href="#">{linkText}</a>
        </div>
        <div className="content-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CardOne;
