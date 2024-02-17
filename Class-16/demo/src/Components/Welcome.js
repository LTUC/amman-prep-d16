function Welcome(props){
    console.log(props)
    return(
        <h2 style={{"color": props.favColor}}>welcome {props.studentName}</h2>
    )
}
export default Welcome;