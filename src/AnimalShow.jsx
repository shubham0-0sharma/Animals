import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    heart,
};

function AnimalShow({ type }) {
    const handleClick = () => {
        setClicks(clicks + 10);
    };
    const [clicks, setClicks] = useState(0);
    return (
        <div className="animal-show">
            <img className="animal" src={svgMap[type]} alt="img" />
            <img
                className="heart"
                src={svgMap["heart"]}
                alt="heart"
                onClick={handleClick}
                style={{ width: 10 + 10 * clicks + "px" }}
            />
        </div>
    );
}
export default AnimalShow;
