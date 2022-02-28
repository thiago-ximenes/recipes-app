import login from '../images/login.png';

function Login() {
  return (
    <main
      className="h-screen w-screen mx-auto flex flex-col justify-center items-center"
    >
      <div
        className="h-72 w-72 bg-gray-200 rounded-full flex flex-col justify-center items-center"
      >
        <img
          className="w-40"
          src={login}
          alt="Recipes App"
        />
        <span
          className="text-3xl text-gray-700 font-['Dancing_Script']"
        >
          Encontre sua nova receita

        </span>
      </div>
      <form
        className="flex flex-col justify-center align-center"
      >
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default Login;
