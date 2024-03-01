import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import PesImage from './images/pes.png';
import SambalImage from './images/sambal.png';
import MasakanImage from './images/masakan.png';
import './App.css';
import { useState } from 'react';
import FoodShow from './FoodShow';

function getRandomFood() {
    const foods = ['spice', 'fruit', 'veggie', 'sushi', 'cake', 'pasta', 'noodle'];

    return foods[Math.floor(Math.random() * foods.length)];
}

function App() {
    /*const handleClick = () => {
        setCount(count + 1);
    };*/

    const [foods, setFoods] = useState([]);
    
    const renderedFoods = foods.map((food, index) => {
        return <FoodShow type={food} key={index} />;
    });

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                 <p>Personal Cooking Assistants</p>
                </div>
            </section>
            
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className= "column is-4" >
                            <ProfileCard 
                            title="Pes" 
                            handle="@pes" 
                            image={PesImage}
                            description="Pes dapat menjimatkan masa masak anda. Berapa lamakah anda memasak sesuatu hidangan?"/>
                        </div>
                        <div className= "column is-4" >
                            <ProfileCard 
                            title="Sambal" 
                            handle="@sambal" 
                            image={SambalImage}
                            description="Sambal dapat menambahkan selera makan anda. Sambal apakah menjadi pilihan anda?" />
                        </div>
                        <div className= "column is-4" >
                            <ProfileCard 
                            title="Masakan" 
                            handle="@masakan" 
                            image={MasakanImage}
                            description="Masakan boleh menggembirakan hari anda. Apakah masakan kegemaran anda?" />
                        </div>
                    </div>
                </section>
            </div>
            
            <div className='app'>                
                <button onClick={() => setFoods([...foods, getRandomFood()])}>
                    Add Food</button>
                <div className='food-list'>{renderedFoods}</div>
            </div>
            
        </div>
    );
}

export default App;