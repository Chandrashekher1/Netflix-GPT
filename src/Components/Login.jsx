import { useRef, useState } from "react";
import Header from "./Header";
import { checkValiData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"; // Import correctly
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate()

    const name = useRef()
    const email = useRef(null);
    const password = useRef(null);

    const handleLoginValidate = () => {
        const message = checkValiData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    updateProfile(auth.user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        navigate("/browse")
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                      });
                      
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing up:", errorCode, errorMessage);
                    setErrorMessage(errorMessage); // Show error
                });
                navigate("/browse")
        } else {
            // Sign In logic (you can add sign-in code here)

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
            navigate("/browse")

        }
    };

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

            <form onSubmit={(e) => e.preventDefault()} className="absolute p-10 w-1/4 h-auto my-36 mx-auto left-0 right-0 bg-black bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 text-white">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <>
                        <input
                            type="text"
                            placeholder="Name"
                            className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                        />
                    </>
                )}
                <input 
                    ref={email}
                    type="text"
                    placeholder="Email or mobile number" 
                    className="py-2 my-4 bg-gray-700 w-full rounded-md p-2"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="py-2 bg-gray-700 my-4 w-full rounded-md p-2"
                />

                <p className="text-red-800 font-semibold text-xl py-2">{errorMessage}</p>

                <button className="py-4 my-4 bg-red-700 w-full rounded-md" onClick={handleLoginValidate}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-gray-500 py-4">
                    <button
                        className="text-white hover:underline"
                        onClick={toggleSignInForm}
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
