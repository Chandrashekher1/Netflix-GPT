import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); 

    const toggleSignInForm = (event) => {
        event.preventDefault(); 
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
                    alt="bg-image"
                    className="bg-slate-900"
                />
            </div>

            <form action="" className="absolute p-10 w-1/4 h-auto my-36 mx-auto left-0 right-0 bg-black bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 text-white">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    type="text"
                    placeholder="Name"
                    className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                />}
                {!isSignInForm && <input
                    type="text"
                    placeholder="sureName"
                    className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                />}
                <input
                    type="text"
                    placeholder="Email or mobile number"
                    className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="py-2 bg-gray-700 my-4 w-full rounded-md p-2"
                />
                <button className="py-4 my-4 bg-red-700 w-full rounded-md">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-gray-500 py-4">
                    <button
                        className="text-white hover:underline"
                        onClick={toggleSignInForm} // Handle form toggle
                    >
                        {isSignInForm
                            ? "New to Netflix? Sign Up Now"
                            : "Already registered? Sign In Now"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;