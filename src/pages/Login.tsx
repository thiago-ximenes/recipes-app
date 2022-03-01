import { useEffect } from 'react';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import Input from '../components/Input';
import login from '../images/login.png';
import api from '../services/api';

const Login : React.FC = () => {
  useEffect(() => {
    document.title = 'Login - App de Receitas';
    api.get('doce').then((response) => console.log(response.data));
  }, []);

  return (
    <main
      className="h-screen w-screen mx-auto flex flex-col justify-center items-center"
    >
      <div
        className="h-72 w-72 bg-gray-200 rounded-full flex flex-col
        justify-center items-center mb-10"
      >
        <img
          className="w-40"
          src={ login }
          alt="Recipes App"
        />
        <span
          className="text-4xl text-gray-700 font-['Dancing_Script']
          whitespace-nowrap"
        >
          Encontre sua nova receita

        </span>
      </div>
      <form
        className="flex flex-col justify-center align-center w-3/4"
      >
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <button
          className="flex justify-center align-center w-full py-4 rounded-sm bg-[#3E5690] text-white
          mt-6 text-2xl font-bold hover:bg-[#2E3E70]"
          type="submit"
          onClick={ (e) => e.preventDefault() }
        >
          <span>Entrar</span>
          <GiForkKnifeSpoon
            className="ml-2 self-center"
          />

        </button>
      </form>
    </main>
  );
};

export default Login;
