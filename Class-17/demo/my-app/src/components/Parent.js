import Child from "./Child";
import boy1Img from "./assets/boy1.jpg"
import boy2Img from "./assets/boy2.jpg"
import {useState} from 'react';

function Parent(){
    const [totalToys, setTotalToys] = useState(20)
    const [boolFlag, setBoolFlag] = useState(false);

    const decrementTotalToys = (boolVal) =>{
        setTotalToys(totalToys -1);
        setBoolFlag(boolVal);
    }

    return(
        <>
        <h6>Parent</h6>
        <h3>Number of total Toys = {totalToys}</h3>
        <Child name="Ahmad" age="12" imgPath={boy1Img} decrementFun={decrementTotalToys} />
        <Child name="Khaled" age="8" imgPath={boy2Img} decrementFun={decrementTotalToys}/>

        {boolFlag? "Hello" : "Good Bye"}
        </>
    )
}

export default Parent;