import Name from "./Name";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      <Name />
      <img
        src="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_640.jpg"
        alt=""
      />
      <p>Color: Black </p>
    </div>
  );
};

export default Person;
