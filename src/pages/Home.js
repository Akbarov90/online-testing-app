import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/actions';
import Quiz from '../components/Quiz';

const Home = () => {
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const hadleAuth = () => {
        if(currentUser){
            dispatch(logoutInitiate());
        }
    }
    return (
        <div>
           
           <h2 className="text-center my-3">Assalomu alaykum! online test platormasiga xush kelibsiz!</h2> 
           <br />
           <button type="button" onClick={hadleAuth} className="btn btn-danger d-block mx-auto">Tizimdan chiqish</button>
           <Quiz/>
        </div>
    )
}

export default Home
