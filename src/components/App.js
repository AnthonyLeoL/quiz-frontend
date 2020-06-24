import React from "react"
import QuizPage from "../pages/QuizPage"
import Navbar from "./Navbar"
import Home from "../pages/Home"
import Place from "../pages/Placeholder"
import ResultPage from "../pages/ResultPage"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"


/* some request to server to get queezes. 
next line is inital placeholder placeholder */
const App = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Home} />

            <Route path="/quiz" exact component={QuizPage} />
            <Route path="/results" exact component={ResultPage} />

            <Route path="/placeholder" exact component={Place} />

        </Router>
    )

}

export default App;