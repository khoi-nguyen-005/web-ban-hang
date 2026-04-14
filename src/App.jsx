import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav id="main-nav">
          <div className="logo">PTIT SHOP</div>
          <ul>
            {/* Sử dụng Link để chuyển trang không bị load lại trình duyệt */}
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li>Linh kiện</li>
            <li>Liên hệ</li>
          </ul>
        </nav>

        {/* Đây là nơi nội dung các trang sẽ hiển thị */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer id="footer">
          <p>© 2026 - Bài tập thực hành số 2 - Nguyễn Văn Khởi</p>
          <p>Học viện Công nghệ Bưu chính Viễn thông - TP.HCM</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
