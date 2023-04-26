import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import New from './components/New/New';
import Setting from './components/Setting/Setting';
import UsersConteiner from './components/Users/UserConteiner';
import MusicConteiner from './components/Music/MusicConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { Suspense } from 'react';

const DialogsConteiner = React.lazy(() => import("./components/Dialogs/DialogsConteiner"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileConteiner"));
const Longin = React.lazy(() => import("./components/Longin/Login"));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}
  render() {

    if(!this.props.initialized) {
      return <Preloader />
  }

    return (
      <Router>
        <div className='app-wrapper'>
          <HeaderConteiner />
          <Nav />
          <div className='app-wrapper-content'>
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/login" element={<Longin />} />
              <Route path="/dialogs" element={<DialogsConteiner />} />
              <Route path="/new" element={<New />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/music" element={<MusicConteiner />} />
              <Route path="/users" element={<UsersConteiner />} />
            </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStaetToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

let ConteienrApp = compose( connect(mapStaetToProps, { initializeApp })(App))

const SamuraiJSApp = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <ConteienrApp />
    </Provider>
  </React.StrictMode>
}

export default SamuraiJSApp