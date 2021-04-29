import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer store={props.store}/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userID?' render={ () => <ProfileContainer store={props.store}/> }/>
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> }/>
                    <Route path='/users' render={ () => <UsersContainer /> }/>
                    <Route path='/login' render={ () => <Login /> }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
