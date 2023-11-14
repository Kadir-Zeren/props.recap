import Name from "./Name";

const Person = ({ name, img, color = "Grey" }) => {
  //   const { name, img, color } = props;
  return (
    <div>
      <Name name={name} />
      <img src={img} alt="cat" />
      <p>Color: {color} </p>
    </div>
    // <div>
    //   <Name name={props.name} />
    //   <img src={props.img} alt="cat" />
    //   <p>Color: {props.color} </p>
    // </div>
  );
};

export default Person;
