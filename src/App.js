import React from 'react';
import Header from './components/template/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './screens/home/Home';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/news/:category" exact component={Home}/>
            </div>
        </Router>
    );
}

export default App;
