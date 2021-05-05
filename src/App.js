import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {getAuthUserData} from "./redux/authReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return(
            <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer store={props.store} />
            <Navbar store={props.store} />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userID?' render={() => <ProfileContainer store={props.store} />} />
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
        </div>
            </BrowserRouter >
        );
    }
};

export default connect(null, {getAuthUserData})(App);
