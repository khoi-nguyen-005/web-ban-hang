import "./App.css";
function App() {
  return (
    <div className="container">
      <nav id="main-nav">
        <div className="logo">PTIT SHOP</div>
        <ul>
          <li>Trang chủ</li>
          <li>Laptop</li>
          <li>Linh kiện</li>
          <li>Liên hệ</li>
        </ul>
      </nav>

      <header className="hero-banner">
        <h1>
          CHÀO MỪNG ĐẾN VỚI <br /> THẾ GIỚI CÔNG NGHỆ
        </h1>
        <p>Sinh viên thực hiện: Nguyễn Văn Khởi - N23DCCN032</p>
        <button className="btn-cta">Khám phá ngay</button>
      </header>

      <main className="product-section">
        <h2 className="title">Sản phẩm nổi bật</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="badge">Sale</div>
            <img
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500"
              alt="Laptop"
            />
            <h3>Laptop Gaming Victus</h3>
            <p className="price">
              18.500.000đ <del>20.000.000đ</del>
            </p>
            <button className="btn-buy">Thêm vào giỏ</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500"
              alt="Linh kiện"
            />
            <h3>Card đồ họa RTX 4060</h3>
            <p className="price">9.200.000đ</p>
            <button className="btn-buy">Thêm vào giỏ</button>
          </div>
        </div>
      </main>

      <footer id="footer">
        <p>© 2026 - Bài tập thực hành số 1 - Lập trình Web</p>
        <p>Học viện Công nghệ Bưu chính Viễn thông - TP.HCM</p>
      </footer>
    </div>
  );
}

export default App;
