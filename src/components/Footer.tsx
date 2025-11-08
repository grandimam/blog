export function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        paddingTop: "20px",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "#828282",
          textAlign: "center",
          lineHeight: "1.4",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/grandimam"
            style={{
              color: "#828282",
              textDecoration: "none",
              fontSize: "10px",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/thegrandimam"
            style={{
              color: "#828282",
              textDecoration: "none",
              fontSize: "10px",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        © 2025 GRANDIMAM
      </div>
    </footer>
  );
}
