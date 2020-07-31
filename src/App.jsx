import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer =  compose(withRouter,connect(mapStateToProps, {initializedApp, getAuthUserData}))(App);

const SocialNetApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>,
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetApp;
