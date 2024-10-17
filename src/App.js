
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.scss";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
