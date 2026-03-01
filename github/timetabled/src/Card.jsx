const Card = ({ title, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} height="100px" />
      <h4>{title}</h4>
       <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Learn More</button>
      </a>
    </div>
  );
};

export default Card;