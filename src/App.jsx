import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer"
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
//import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileInfo/ProfileContainer"))

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
                <div className='container'>
                    <Navbar/>
                    <div className='content'>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}>
                        </Route>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializedApp, getAuthUserData}))(App);

const SocialNetApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>,
            </Provider>
        </HashRouter>
    )
}

export default SocialNetApp;
