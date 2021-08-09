import React from "react";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="paginado">
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li className="number" key={number}>
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}