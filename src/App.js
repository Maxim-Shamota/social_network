import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader />
        // }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer store={this.props.store} />
                    <Navbar store={this.props.store} />
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer store={this.props.store} />} />
                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store} />} />
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(null, { initializeApp }))(App);
