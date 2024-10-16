import "../scss/card.scss";
const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map(({ id, name, job, comment, img }) => (
        <div className="card">
          <div className="cardInterior" key={id}>
            <h1>{name}</h1>
            <img  className="image" src={img} alt="" />
            <p>{job}</p>
            <p>"{comment}"</p>

            <button className="small">small</button>
            <button className="large">large</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
