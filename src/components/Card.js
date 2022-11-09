import React from "react";
import * as styles from "./Card.module.css"
function Card(props) {
    const {title, icon, description} = props
    return (
        <div className={styles.card}>
           <div className={styles.icon}></div>
           <h2>{title}</h2>
           <p>{description}</p> 
        </div>
    )
}


export default function Cards(props) {
    const {cards} = props

    return (
        <div className={styles.cards}>
            { cards.map(c => <Card key={c.id} {...c} />) }
        </div>
    )

}