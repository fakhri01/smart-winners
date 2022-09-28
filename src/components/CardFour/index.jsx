import winner from '../../assets/img/winner-1.png'
import flag from '../../assets/img/Germany.png'
import './card-four.css'

const CardFour = () => {
  return (
    <div className="card-four-container">
      <div>
        <img src={winner} alt="Winners" />
      </div>
      <div className='px-3'>
        <p className="date">20.11.2021</p>
        <p><img src={flag} alt="Germay" />J.J won  Р175</p>
        <pre>in   7 ИЗ 49   draw  #13476</pre>
      </div>
    </div>
  );
};

export default CardFour;
