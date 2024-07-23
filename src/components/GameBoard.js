import CardElement from "./CardElements"

export default function GameBoard(props) {
    return (
        <div id="gameBoard">
            {props.cards.map((card, index) => 
                <CardElement handleFlip={props.handleFlip} key={index} card={card} />
            )}
        </div>
    )
}