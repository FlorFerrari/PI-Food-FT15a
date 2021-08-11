import React from "react";
import s from "../styles/Card.module.css"

export default function Card({ title, image, diets }) {
    return (
        <div className={s.Card}>
            <h3>{title}</h3>
            <img src={image} alt="background" width="200px" height="250px" />
            <h5>{diets}</h5>
        </div>
    )
}