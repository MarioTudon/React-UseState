import React, { useState } from "react";

function Card({ imageSrc, title, description }) {
    return (
        <div className="card">
            <img src={imageSrc} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Counter />
        </div>
    );
}

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button >
        </div >
    );
};

export default Card;