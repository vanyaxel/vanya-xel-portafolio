import React from "react";
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import InitialView from './components/InitialView.jsx';
import HomeView from './components/HomeView.jsx';
import SkillView from './components/skills/SkillView.jsx';
import ProjectsView from './components/ProjectsView.jsx';
import Contact from './components/Contact.jsx';
import SoftSkills from './components/skills/SoftSkills.jsx';
import TechSkills from './components/skills/TechSkills.jsx';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InitialView} />
        <Route path="/about" component={HomeView} />
        <Route path="/skills" component={SkillView} />
        <Route path="/projects" component={ProjectsView} />
        <Route path="/contact" component={Contact} />
        <Route path="/tech-skills" component={TechSkills} />
        <Route path="/soft-skills" component={SoftSkills} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;