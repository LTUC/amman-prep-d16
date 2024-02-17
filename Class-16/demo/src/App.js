
import MyFirstComponent from "./Components/MyFirstComponent";
import Welcome from "./Components/Welcome";
import Memes from "./Components/Memes";
const memesData = require("./data/data.json");

function App() {
  const name="Aseel";
  const favColor ="red";
  const name2="Muath";
  const color2= "green";
  return (
    <>

      <h1>Hello World</h1>
      <MyFirstComponent/>
     < Welcome studentName={name} favColor={favColor}/>
     < Welcome studentName={name2} favColor={color2}/>
     {/* <Memes meme_image={memesData[0].image}  meme_name={memesData[0].name}/> */}

     {
      memesData.map(element=>{
        return(
          <Memes meme_name={element.name} meme_image={element.image}/>
        )
      })
     }


    </>
  );
}

export default App;
