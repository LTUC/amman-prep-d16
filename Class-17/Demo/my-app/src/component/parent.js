import Child from "./Child";
import boy1Img from './assets/boy1.jpg' 
import boy2Img from './assets/boy2.jpg'
import {useState} from 'react';

function Parent() {
    const [takenToys, setTakenToys] = useState(20);
    const [boolVar, setBoolVar] = useState(false);

    const decrementTakenToys = (boolVar1) => {
        setTakenToys(takenToys-1)
        setBoolVar(boolVar1)
        console.log(boolVar1)

    }
    return (
        <>
            <h2>Parent Component</h2>
            <h3>Total Number of Toys: {takenToys}</h3>
            <Child name="Thaer" age="23" imgPath={boy1Img} decrementFun={decrementTakenToys}/>
            <Child name="Mazen" age="33" imgPath={boy2Img} decrementFun={decrementTakenToys}/>

            {boolVar ? console.log("Hello") : console.log("Bye Bye")}
        </>
    );
  }
  
  export default Parent;