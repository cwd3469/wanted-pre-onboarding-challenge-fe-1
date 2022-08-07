import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../../components";
import Login from "../Login";
import Todo from "../Todo";
import Join from "../Join";
import "./app.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Todo />}></Route>
            <Route path="/auth" element={<Login />}></Route>
            <Route path="/auth/join" element={<Join />}></Route>
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
