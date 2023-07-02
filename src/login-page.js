import React, { useEffect } from "react";
import firebase from "./firebase"; // Import the firebase instance from your firebase.js file
import { useNavigate } from "react-router-dom";
import loingImage from "./loginImage.svg";
import jobseeker from "./jobseeker.svg"

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already signed in
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, navigate to the home page
                navigate("/home");
            }
        });

        // Unsubscribe from the auth state listener when the component unmounts
        return () => unsubscribe();
    }, [navigate]);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };
    return (
        <main className="w-screen h-screen">
            <div className="flex justify-between w-full h-full">
                <div className="w-[40%] h-full bg-white text-white">
                    {/* This place is left for adding image */}
                    {/* <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image to be added" className="fill aspect-auto" /> */}
                    <img src={loingImage} alt="Login image"  className="w-full h-full"/>
                </div>

                {/* This is the main login form of the page */}
                <div className="w-[60%] h-full p-10 bg-gradient-to-br from-blue-600 to-black">
                    <div className="rounded-xl h-full flex-col space-y-5">
                        <div className="pl-20 pt-28">
                            <p className="text-white font-sans font-semibold text-2xl">Choose a profile!</p>
                        </div>

                        <div className="flex justify-between h-32 p-10 px-40">
                            <div className="flex-col space-y-2">
                                {/* image to be added over here */}
                                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="job seeker image" className="w-24 h-24 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pt-2" />

                                <div className="flex justify-center">
                                    <p className="text-white font-mono">Recruiter</p>
                                </div>
                            </div>
                            <div className="w-1 h-32 bg-zinc-200 rounded"></div>
                            <div className="flex-col space-y-2">

                                {/* image to be added over here */}
                                {/* <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="job seeker image" className="w-24 h-24 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 pt-2" /> */}
                                <img src={jobseeker} alt="" className="rounded-full w-24 h-24 aspect-square" />

                                <div className="flex justify-center">
                                    <p className="text-white font-mono">Job Seeker</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-24 px-20">
                            <div className="w-full h-1 bg-white rounded mt-2.5"></div>
                            <div className="mx-4 text-white text-md">
                                or
                            </div>
                            <div className="w-full h-1 bg-white rounded mt-2.5"></div>
                        </div>

                        <div className="space-x-5 px-24 pt-4 flex justify-center">
                            <button className="w-[30%] rounded bg-white text-black  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-xl font-bold px-6 py-2 active:border-blue-600 active:text-blue-600" onClick={handleGoogleSignIn}>Google</button>
                        </div>

                        <div className="flex justify-center pt-3">
                            <p className="text-sm text-white">Don't have an account? <span className="text-blue-400 hover:text-blue-600 font-semibold cursor-pointer">Sign up</span></p>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Login;