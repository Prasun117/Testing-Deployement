import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MyInfo } from "MyInfo";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Router>
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/welcome">Welcome</Link>
          </button>
          <button>
            <Link to="/my-info">My Info</Link>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/welcome" element={<div>welcome</div>} />
          <Route path="/my-info" element={<MyInfo />} />
        </Routes>
      </Router>
      <div>I am Footer</div>
    </div>
  );
}
