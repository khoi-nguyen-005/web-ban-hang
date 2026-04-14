import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Giới thiệu | PTIT Shop";
  }, []);

  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        minHeight: "80vh",
        color: "#fff",
      }}
    >
      <h1
        style={{
          color: "#ff4d4d",
          fontSize: "3rem",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Giới thiệu về PTIT Shop
      </h1>

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.2rem",
        }}
      >
        <p style={{ color: "#ccc", marginBottom: "40px" }}>
          Đây là dự án thực hành cá nhân trong khuôn khổ học phần Thực hành Lập
          trình Web tại Học viện Công nghệ Bưu chính Viễn thông cơ sở TP.HCM.
        </p>

        <div
          style={{
            marginTop: "20px",
            padding: "40px",
            border: "1px solid #444",
            backgroundColor: "#1a1a1a",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <p style={{ margin: "15px 0" }}>
            Sinh viên thực hiện:{" "}
            <strong style={{ color: "#fff" }}>Nguyễn Văn Khởi</strong>
          </p>
          <p style={{ margin: "15px 0" }}>
            Mã số sinh viên:{" "}
            <strong style={{ color: "#fff" }}>N23DCCN032</strong>
          </p>
          <p style={{ margin: "15px 0" }}>
            Chuyên ngành:{" "}
            <strong style={{ color: "#fff" }}>Công nghệ thông tin</strong>
          </p>
          <p style={{ margin: "15px 0" }}>
            Cơ sở:{" "}
            <strong style={{ color: "#fff" }}>PTIT TP.HCM (Quận 9)</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
