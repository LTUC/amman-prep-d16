
function profile(props) {
    console.log("this is the data that came from the parent: ",props)
  return (
    <>
    <div>
        <p>phonenumber: {props.phonenumber}</p>
    </div>
    </>
  );
}

export default profile;
