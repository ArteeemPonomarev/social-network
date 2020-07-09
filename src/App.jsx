import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";




const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='content'>

                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}>
                </Route>

                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}>
                </Route>

                <Route path='/users'
                       render={() => <UsersContainer/>}>
                </Route>

                <Route path='/login'
                       render={() => <Login/>}>
                </Route>

                <Route path='/news' render={() => <News/>}></Route>
                <Route path='/music' render={() => <Music/>}></Route>
                <Route path='/settings' render={() => <Settings/>}></Route>


            </div>
        </div>
    );
}

export default App;
