import './App.css';

function AboutUs(props) {
    console.log("this is the data that came from the parent: ",props)
  return (
    <>
    <h1>Hello From AboutUs component</h1>
    <h2>Hi from React application From AboutUs component</h2>
    <div>
        <p>Name: {props.name}</p>
        <p>age: {props.age}</p>
    </div>
    </>
  );
}

export default AboutUs;
