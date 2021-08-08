import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <h1>Delicious</h1>
            <h2>Thousands of recipes ideas in just one click.</h2>
            <Link to="/home"><button>Explore</button></Link>
        </div>
    )
};