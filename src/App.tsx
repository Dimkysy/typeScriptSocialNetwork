import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootPageType} from "./React-redux/state";

const App = (props:RootPageType) => {

    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div>
                    <Route path='/dialogs' render={() => <Dialogs state = {props.dialogPage} />} />
                    <Route path='/profile' render={() => <Profile state = {props.profilePage} />} />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;