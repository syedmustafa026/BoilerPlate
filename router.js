// Install npm react-router-dom first...

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../containers/Login';
import Signup from "../containers/Signup";
import Profile from '../containers/Profile';
import { onAuthStateChanged, auth } from './Firebase';
import { useEffect } from 'react';
import { useState } from 'react';
function AppRouter() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true)
            }
            else{
                setIsAuth(false)
            }
        })
    }, [])
    return (
        <Router>
            {isAuth ?
                <Switch>
                    <Route exact path="/" component={Profile} />
                </Switch>
                :
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    
                </Switch>
            }
        </Router>
    )
}

export default AppRouter;
