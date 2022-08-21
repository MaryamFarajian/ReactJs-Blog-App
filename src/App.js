import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RouterUser from "./pages/users/Router";
import RouterPost from "./pages/posts/Router";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/users/*" element={<RouterUser/>} />
        <Route path="/" element={<RouterPost/>} />
        <Route path="/posts/*" element={<RouterPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;