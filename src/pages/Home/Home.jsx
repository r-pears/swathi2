import React, { useState } from 'react'; 
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreRecipe from '../../components/ExploreRecipe/ExploreRecipe';
import AppDownload from '../../components/AppDownload/AppDownload';


const Home = () => {
    const [category, setCategory] = useState("all"); 

    return (
        <div>
            <Header />
            <ExploreRecipe category={category} setCategory={setCategory} /> 
            <AppDownload />
        </div>
    );
}

export default Home;
