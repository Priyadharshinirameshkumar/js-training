function TsxRules() {
  return (
    <div>
      {/* Self-closing input tag */}
      <input type="text" />

      {/* Use className instead of class */}
      <p className="highlight">Styled paragraph</p>

      {/* Use htmlFor instead of for */}
      <label htmlFor="email">Email</label>

      {/* Self-closing input tag */}
      <input id="email" type="email" />

      {/* Inline styles use a JavaScript object with camelCase properties */}
      <p style={{ color: "red", fontSize: "16px" }}>
        Red text
      </p>

      {/* JSX comments use curly braces */}
      {/* This is a comment */}
    </div>
  );
}

export default TsxRules;