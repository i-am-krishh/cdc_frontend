import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Opportunities from "./Pages/Opportunities/Opportunities";
import Blogs from "./Pages/Blogs/Blogs";
import Events from "./Pages/Events/Events";
import Team from "./Pages/Team/Team";
import Glance from "./Pages/Glance/Glance";
import About from "./Pages/About/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/glance" element={<Glance />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
