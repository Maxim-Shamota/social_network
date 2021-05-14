import React from 'react';
import { connect, Provider } from "react-redux";
import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from 'redux';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";
import { withSuspense } from "./hoc/withSuspense";
import store from "./redux/reduxStore";

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
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>

                    <Switch>
                        <Route exact path='/'
                            render={() => <Redirect to={'/profile'} />} />

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
                        <Route path='*' render={() => <div>ERROR 404. FILE NOT FOUND</div>} />
                    </Switch>

                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
