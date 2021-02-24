import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {

  const APP_ID = '49bc5582';
  const APP_KEY = 'c3edfca0463cb242d0fc42f9b538ddb4';

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  },[query]);

  const getRecipe = async() =>{
    const myUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(myUrl);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      }}>
      <h1>Food Recipe Search</h1>
      <div className="search-bar">
      <input type="text" placeholder="search" value={search} onChange={(e) => {
        setSearch(e.target.value);
        console.log(search);
      }}/>
      <button id="search-btn" type="submit">search</button>
      </div>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default App;
