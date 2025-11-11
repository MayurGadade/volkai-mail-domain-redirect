export default function UnsubscribePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fa",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#004aad" }}>You’ve been unsubscribed</h1>
      <p style={{ maxWidth: "500px", lineHeight: 1.6 }}>
        You’ll no longer receive emails from <strong>Volkai HR</strong>. We’re
        sorry to see you go — you can re-subscribe anytime from our website.
      </p>
      <a
        href="https://hr.volkai.io"
        style={{
          marginTop: "25px",
          background: "#ff8a00",
          color: "#fff",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: "30px",
          fontWeight: 700,
        }}
      >
        Go Back to Volkai HR
      </a>
    </main>
  );
}
