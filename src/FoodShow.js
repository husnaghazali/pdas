import './FoodShow.css';
import { useState } from 'react';
import veggie from './imgfood/veggie.jpg';
import cake from './imgfood/cake.jpg';
import fruit from './imgfood/fruit.jpg';
import noodle from './imgfood/noodle.jpg';
import spice from './imgfood/spice.jpg';
import sushi from './imgfood/sushi.jpg';
import pasta from './imgfood/pasta.jpg';
import heart from './imgfood/heart.svg'


const imgfoodMap = {
    veggie,
    cake,
    fruit,
    noodle,
    spice,
    sushi,
    pasta,
};

function FoodShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className="food-show" onClick={handleClick}>
            <img alt="food" src={imgfoodMap[type]} />
            <img 
                className='heart'
                alt="heart" 
                src={heart}
                style={{ width: 10 + 10 * clicks + 'px'}} 
            />
        </div> 
    );
}

export default FoodShow;