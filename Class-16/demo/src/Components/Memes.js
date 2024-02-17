function Memes(props){
    return(
        <>
        <h2>{props.meme_name}</h2>
        <img src={props.meme_image} alt={props.meme_name} />
        </>
    )
}
export default Memes;