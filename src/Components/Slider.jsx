const SliderRct = ({ src, desc, name }) => {
  return (
    <div>
      <img src={src} alt="" />
      <p>{desc}</p>
      <h3>{name}</h3>
    </div>
  );
};

export default SliderRct;
