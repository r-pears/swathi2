import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ExploreRecipe from './components/ExploreRecipe/ExploreRecipe';
import SearchPage from './components/SearchPage/SearchPage';
import RecipePage from './components/RecipePage/RecipePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
  
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/explore' element={<ExploreRecipe />} />  
       <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} /> 
      </Routes>
    </div>
    <Footer/>
    </>

  );
}

export default App;
