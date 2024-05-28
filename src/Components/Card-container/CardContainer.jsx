import { Component } from "react";
import './card.css'
class CardContainer extends Component{
    render(){
        const{name,email,id} = this.props.monster
        return( 
            <div className="card-container" key={id}>
                <img 
                src={`https://www.robohash.org/${id}?set=set1&size=180x180`} 
                alt={`${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>)
    }
}
export default CardContainer