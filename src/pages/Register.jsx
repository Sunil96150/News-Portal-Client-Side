import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from './Provider/AuthContext';
import SocialLogIn from './SocialLogIn';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handelSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Form Sign Up:', name, photo, email, password);

        
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

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const createAt = result?.user?.metadata?.creationTime;
                const fromdata = {name , email , photo , createAt}
                

                //send user in database

                fetch('http://localhost:5000/newsUser' , {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json' 
                    },
                    body: JSON.stringify(fromdata)

                })
                .then(res => res.json())
                .then(data =>{
                    console.log('user creat at db',data)
                    if(data.insertedId){
                        Swal.fire({
                            title: "Registration Successful!",
                            text: "You have successfully registered. Please log in.",
                            icon: "success",
                            confirmButtonText: "OK",
                        })
                    }
                })

                .then(() => {
                    navigate('/login'); 
                });
            })
            .catch((error) => {
                console.log(error);

                Swal.fire({
                    title: "Registration Failed!",
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
                    <h1 className="text-5xl text-center font-bold">Register now!</h1>
                    <p className="py-6">
                        Enter your email and password to access your dashboard and track your contributions. Stay updated on your campaigns and donations.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSignUp} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input" name="name" placeholder="Name" required />
                            <label className="fieldset-label">Photo URL</label>
                            <input type="text" className="input" name="photo" placeholder="Photo" required />
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <SocialLogIn></SocialLogIn>
                            <p className='text-2xl py-2'>See all Campaigns: <Link className="text-red-600 text-2xl py-2" to="/login">Log in</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
