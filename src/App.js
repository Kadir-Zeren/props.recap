import Person from "./components/Person";

function App() {
  return (
    <div>
      <Person
        name="Puffy"
        img="https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_640.jpg"
        color="Black"
      />

      <Person
        name="Garfield"
        img="https://cdn.pixabay.com/photo/2021/05/19/11/19/cat-6265637_640.jpg"
        color="Orange"
      />
      <Person
        name="Grey"
        img="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png"
      />
    </div>
  );
}

export default App;
