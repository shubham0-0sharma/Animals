import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        const newAnimal = getRandomAnimal();

        setAnimals([...animals, newAnimal]);
    };

    const getRandomAnimal = () => {
        const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

        return animals[Math.floor(Math.random() * animals.length)];
    };
    const renderedAnimals = animals.map((animal, index) => (
        <AnimalShow key={index} type={animal} />
    ));

    return (
        <div className="app">
            <h1>Show Animal list here</h1>
            <button onClick={handleClick}>Add Animal</button>

            <div className="animal-list">{renderedAnimals}</div>
            {}
        </div>
    );
}

export default App;
