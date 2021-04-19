import React from 'react'
import GoogleLogin from 'react-google-login'
import { selectSignedIn, setUserData, setSignedIn} from '../features/userSlice'
import {useDispatch,useSelector} from 'react-redux'
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch()
    const login = (response)=>{
        console.log(response.profileObj);
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))

    };

    const isSignedIn = useSelector(selectSignedIn);
    return (
        <div className ="home__page" style={{ display: isSignedIn ? "none" : ""}}>
            { !isSignedIn ? (<div className="login__message">
                <h2>💻 </h2>
                <h1>A Readers favourite place!</h1>
                <p>
                    We provide high quality online resource for reading blogs. Just sign
                    up and start reading some quality blogs.
                </p>
                <GoogleLogin
                    clientId="191113899605-9c8d3d00hfag3ccksellhfl9s21htbo2.apps.googleusercontent.com"
                    render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                    >
                        Login with Google
                    </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>):(
                ""
            )}
            
            
        </div>
    )
}

export default HomePage
