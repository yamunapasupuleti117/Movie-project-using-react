import React from "react";
import ReactDOM from "react-dom";
function Navbar(params) {
    return(
        <>
        <ul>
            <li>Shop N@w</li>
            <li><input type="text" placeholder="what is on your mind today" /></li>
            <li><button>Search</button></li>
            <li><i class="fa-solid fa-heart"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
        </>
    )
    
}

export default Navbar