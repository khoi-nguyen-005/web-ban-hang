import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Không tìm thấy trang</h2>
      <Link to="/" className="back-home-link">
        Quay lại trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
