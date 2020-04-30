import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { HashRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebar={props.state.sidebar} />
        <div className='content'>

          <Route path='/profile'
                                 render={() => <Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch} />}>
          </Route>

          <Route path='/dialogs' 
                                render={() => <Dialogs state={props.state.dialogsPage}
                                                       dispatch = {props.dispatch} />}>
          </Route>

          <Route path='/news' render={() => <News />}></Route>
          <Route path='/music' render={() => <Music />}></Route>
          <Route path='/settings' render={() => <Settings />}></Route>

        </div>
      </div>
    </HashRouter>
  );
}

export default App;
