import card from "./card.module.css"
const Card = (props) =>{
        return(
        <div>
        <img className={card.box} src="https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg" />
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <p>{props.description}</p>
        </div>
        )
        


}
export default Card