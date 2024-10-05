import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Editor from './pages/Editor.js'
import Profile from './pages/Profile.js'
import SignIn from './pages/SignIn.js'
import { UserProvider } from './context/UserContext';

// Main App component
function App() {
    return (
        <UserProvider>
            <Router>
                <div className="min-h-screen bg-gray-50">
                    <Routes>
                        <Route path="/" exact component={Home} />
                        <Route path="/editor/:id" component={Editor} />
                        <Route path="/profile/:username" component={Profile} />
                        <Route path="/signin" component={SignIn} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
