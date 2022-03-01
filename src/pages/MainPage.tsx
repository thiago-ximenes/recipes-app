import { useEffect, useState } from 'react';
import api from '../services/api';

const MainPage: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    document.title = 'Página de Receitas - App de Receitas';
    api.get('doce').then((response) => setRecipes(response.data));
  }, []);

  return (
    <div>
      {recipes?.map((recipe) => (
        <div key={ recipe._id }>
          <h1>{ recipe.receita }</h1>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
