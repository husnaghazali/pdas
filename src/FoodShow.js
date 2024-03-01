import veggie from './imgfood/veggie.jpg';
import cake from './imgfood/cake.jpg';
import fruit from './imgfood/fruit.jpg';
import noodle from './imgfood/noodle.jpg';
import spice from './imgfood/spice.jpg';
import sushi from './imgfood/sushi.jpg';
import pasta from './imgfood/pasta.jpg';


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
    return <div>
        <img alt="food" src={imgfoodMap[type]} /></div>;
}

export default FoodShow;