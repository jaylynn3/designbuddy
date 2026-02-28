const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} height="100px" />
      <h4>{title}</h4>
      <button>Learn More</button>
    </div>
  );
};

export default Card;