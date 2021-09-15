import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { Awards } from "./components/pages/Awards";
import { Experience } from "./components/pages/Experience";
import { Home } from "./components/pages/Home";
import { Interest } from "./components/pages/Interest";
import { Skills } from "./components/pages/Skills";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/awards" exact component={Awards} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/interest" exact component={Interest} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
