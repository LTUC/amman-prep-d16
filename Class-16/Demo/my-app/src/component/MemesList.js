function MemesList(props){
    return(
        <div>
        <h2>Memes List</h2>
        {props.arrData.map((item) => {
            return(
                <div key={item.ID}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name}></img>
                    <p>{item.info}</p>
                </div>
            )

        })}
        </div>
        
    )
}

export default MemesList;