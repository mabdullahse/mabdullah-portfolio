import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import TimelineExp from "./components/timeline/TimelineExp";
import Achievements from "./components/achievements/achievements";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hash = window.location.hash;
  if (!hash) {
    // Redirect to #contact
    window.location.href = "#contact";
  }
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Achievements />
        <TimelineExp />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
