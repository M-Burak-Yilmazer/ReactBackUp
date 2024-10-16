const Card = ({ data }) => {
  return (
    <div>
      {data.map(({ id, name, job, comment, img }) => (
        <div key={id}>
          <h1>{name}</h1>
          <img src={img} alt="" />
          <p>{job}</p>
          <p>{comment}</p>
          <button>small</button>
          <button>large</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
