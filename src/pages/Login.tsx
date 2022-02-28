import Input from '../components/Input';
import login from '../images/login.png';

function Login() {
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
          src={login}
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
          className="w-full py-4 rounded-sm bg-[#3E5690] text-white
          mt-6 text-2xl font-bold"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Entrar

        </button>
      </form>
    </main>
  );
}

export default Login;
