import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={s.image}>
            <div className={s.container}>
                {/*  <h1 className={s.title}>Delicious</h1>
            <h2 className={s.h2}>Just one click away <br></br>from thousands of <br></br>healthy recipes</h2> */}
                <Link to="/home"><button className={s.button}>Explore</button></Link>
            </div>
        </div>
    )
};