import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Service from "./components/Service.js"
import Header from "./components/Header.js"
import Portfolio from "./components/Portfolio.js"
import PageNotFound from "./components/PageNotFound.js"
import Client from "./components/Client.js"
import Tech from "./components/Tech.js"
import "./App.css"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/client/:name" element={< Client/>}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/tech/:name" element={< Tech />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
      <Route path="/*" element={<Navigate to='/' />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
