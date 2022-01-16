import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
        username: authUser.displayName,
                profilePic: authUser.photoUrl,
                id: authUser.uid,
      }))
      } else {
        dispatch(logout());
    }
  })
}, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <React.Fragment>
              <img className='app_logo' src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="" />
              
              <div className="app_body">
                <div className="app_bodyBackground">
                    <Switch>
                      <Route exact path='/chats/view'>
                        <ChatView />
                    </Route>
                      <Route exact path='/chats'>
                        <Chats />
                    </Route>
                      <Route exact path='/preview'>
                        <Preview />
                    </Route>
                    <Route exact path='/'>
                        <WebcamCapture />
                    </Route>
                  </Switch>
                </div>
            </div>
            </React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
