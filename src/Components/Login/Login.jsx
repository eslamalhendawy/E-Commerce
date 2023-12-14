import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const attemptLogin = () => {
    toast.info("Attempting Login");
    // toast.success("Login Successful");
    // toast.error("Login Failed");
  };

  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center h-screen ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-[#212529]">Login</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-[#212529]">Email</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" />
          </div>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-[#212529]">Password</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" />
            <Link to="/reset-password" className="">
              <p className="text-right text-xs md:text-base font-bold text-[#212529]">Forgot Password ?</p>
            </Link>
          </div>
          <div className="text-center mb-16">
            <button onClick={attemptLogin} className="bg-[#212529] hover:bg-[#1c1f23] duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Login
            </button>
          </div>
          <p className="text-[#212529] text-center">Don&apos;t have and account ?</p>
          <Link to="/signup">
            <p className="text-center text-lg sm:text-2xl font-bold cursor-pointer text-[#212529] hover:text-[#1c1f23] duration-300">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
