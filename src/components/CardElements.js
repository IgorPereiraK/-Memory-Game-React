export default function CardElement(props) {
    return (
        <div id={props.card.id} onClick={()=>{props.handleFlip(props.card)}} className={`card ${props.card.flipped ? "flip" : ""}`}>
            <div className="card-front">
                <img className="icon" src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
            </div>
            <div className="card-back">
                {"</>"}
            </div>
        </div>
    )
}