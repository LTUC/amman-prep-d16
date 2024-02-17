function MyFirstComponent(){
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxntPitDk0OAkb9vGsxMayLUDYSGmz0ICgmzGE47oKgi6hIwtzAlvbz0vdqnfk69AJNmM&usqp=CAU'
    return(
        <>
        <p style={{"color":"red","background-color":"aqua"}}>my first component</p>
        <img src={url} alt="react" />
        </>
    )
}
export default MyFirstComponent;