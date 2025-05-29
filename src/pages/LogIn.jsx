import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogIn from './SocialLogIn';
import Swal from 'sweetalert2'; 
import AuthContext from './Provider/AuthContext';

const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handelSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        
        const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password);

        if (!isValidPassword) {
            Swal.fire({
                title: "Invalid Password!",
                text: "Password must be at least 6 characters, contain 1 uppercase letter & 1 special character.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
            return;
        }

        logInUser(email, password)
            .then((result) => {
                console.log(result.user);

                //uppded user
                const lastLogInTime = result?.user?.metadata?.lastSignInTime;

                const updatedInfo = {email , lastLogInTime}

                fetch(`https://news-server-protal.vercel.app/newsUser` , {
                    method: 'PATCH',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(updatedInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log('updated login time' , data)
                })

                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome back to your dashboard.",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate('/'); 
                });
            })
            .catch((error) => {
                console.log(error);

                Swal.fire({
                    title: "Login Failed!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Log In now!</h1>
                    <p className="py-6">
                        Enter your email and password to show your job category and apply for your favorite job. You can add your user and see next time.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" required />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral mt-4">Log In</button>
                            <SocialLogIn />
                            <p className='text-2xl py-2'>See all jobs: <Link className="text-red-600" to="/register">Register</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
