import React from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader />
        // }

        return (
            <div className='app-wrapper'>
                <HeaderContainer store={this.props.store} />
                <Navbar store={this.props.store} />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() =>
                        <UsersContainer />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(null, { initializeApp }))(App);
