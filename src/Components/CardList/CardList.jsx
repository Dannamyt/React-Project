import { Component } from "react";
import './card-list.css'
import CardContainer from "../Card-container/CardContainer";

class CardList extends Component{
    
    render(){
        const {monsters} = this.props
        return (
            <div className="card-list">
                {monsters.map((monster) => {
               return(
                <CardContainer monster={monster}/>
              )
               })}
            </div>
        )
    }
}
export default CardList