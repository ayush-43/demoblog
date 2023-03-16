import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Post from "./components/post/Post";

function App() {
  const user = false; 
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<div>This is About Page</div>}/>
        <Route path="/contact" element={<div>This is Contact Page</div>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
