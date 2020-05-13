import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { HashRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebar={props.state.sidebar} />
        <div className='content'>

          <Route path='/profile'
                                 render={() => <Profile store={props.store} />}>
          </Route>

          <Route path='/dialogs' 
                                render={() => <DialogsContainer store={props.store}
                                    state={props.state.dialogsPage}
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
