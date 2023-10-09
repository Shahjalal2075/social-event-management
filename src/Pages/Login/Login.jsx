import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signInUser, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email + " " + password);


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("Login Succsessfull.");
                setTimeout(() => {
                    navigate("/");
                }, 1600);
            })
            .catch(error => {
                console.error(error);
                if (error.code === 'auth/user-not-found') {
                    toast('Email does not match.');
                } else if (error.code === 'auth/wrong-password') {
                    toast('Password does not match.');
                } else {
                    toast('Login failed: ' + error.message);
                }
                navigate("/login");
            })
    }

    const handleGoogleSignin = () => {
        googleUser()
            .then(result => {
                console.log(result.user);
                toast("Login Succsessfully.");

                setTimeout(() => {
                    navigate("/");
                }, 1600);
            })
            .catch(error => {
                console.error(error);
                toast(error.message);
            })
    }


    return (

        <div className="grid grid-cols-5">
            <div className=" col-span-3">
                <img className="w-full" src="https://i.ibb.co/DfSJZvt/4957136.jpg" alt="" />
            </div>
            <div className=" col-span-2 flex flex-col items-center justify-center">

                <h2 className="text-4xl font-bold">Welcome Back</h2>
                <p className="text-base font-medium mt-12">Please Enter Your Details</p>
                <button onClick={handleGoogleSignin} className="border px-6 py-1 rounded-2xl text-xl font-semibold my-6 w-80">Log In with Google</button>
                <div className="flex gap-4 items-center">
                    <hr className="w-20" />
                    <p>or</p>
                    <hr className="w-20" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handleLogin} className="flex flex-col justify-center items-center" action="">
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Email" type="email" name="email" required />
                        <input className="border px-6 py-1 text-lg text-black rounded-2xl mt-4 w-80" placeholder="Enter Password" type="password" name="password" required />
                        <input className=" cursor-pointer bg-[#017EFF] text-lg rounded-2xl mt-4 text-white px-2 py-1 font-semibold mb-4 w-80" type="submit" value={"Login"} />
                    </form>
                    <Link to={"/register"} className="text-base font-bold text-black">Do not have an account? Signup</Link>
                </div>

                <ToastContainer />
            </div>
        </div>

    );
};

export default Login;