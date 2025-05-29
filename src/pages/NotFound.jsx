import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            <div>
            <img className='max-w-5xl mx-auto my-8 md:20'
             src="/src/assets/404.jpg" alt="" />
            </div>
            <div className='flex justify-center mx-auto mb-10 md:mb-20'>
                <button className='btn btn-neutral'><h2 className="text-2xl"><Link to='/'>Click here</Link></h2></button>
            </div>
        </div>
    );
};

export default Notfoundpage;