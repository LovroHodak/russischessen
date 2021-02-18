import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';

function App() {

  const [foods, setFoods] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/foods", { withCredentials: true })
    .then((response) => {
      console.log(response.data)
      setFoods(response.data)
    })
    .catch((err) => {
      console.log('this is error: ', err)
    })
  }, [])


  return (
    <div className="App">
      <h1>RussischFood</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home foods={foods} />;
          }}
        />
        </Switch>
    </div>
  );
}

export default App;


