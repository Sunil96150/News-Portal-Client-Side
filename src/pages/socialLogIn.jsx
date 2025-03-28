import React, { useContext } from 'react';
import AuthContext from './Provider/AuthContext';



const SocialLogIn = () => {
    const {logInWithGoogle} = useContext(AuthContext)

    const handelGoogoleLogIn = () =>{
        logInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        
        <div>
            <div className='divider'>Or</div>
            <div>
            <button onClick={handelGoogoleLogIn} className="btn w-full btn-neutral">Log In With Googole</button>
            </div>
        </div>
    );
};

export default SocialLogIn;