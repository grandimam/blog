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
        © 2025 GRANDIMAM
        <div style={{ 
          fontSize: "9px", 
          color: "#999", 
          marginTop: "4px",
          fontStyle: "italic"
        }}>
          Personal thoughts and opinions
        </div>
      </div>
    </footer>
  );
}
