import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MyPage } from "./MyPage";

function App() {
  return (
    <div className="App">
      <h1>micro front app</h1>
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/my-page">to Next App</Link>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/my-page" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
