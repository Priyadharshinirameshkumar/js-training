function StatusBadge() {
  const isAdmin: boolean = true;
  const hasWarning: boolean = false;
  const isVerified: boolean = true;
  const messages: string[] = ["Assignment submitted", "PR created"];

  return (
    <div>
      {/* Show only if admin */}
      {isAdmin && <span>Admin</span>}

      {/* Show only if warning */}
      {hasWarning && (
        <p style={{ color: "orange" }}>
          Warning: incomplete tasks
        </p>
      )}

      {/* Show only if verified */}
      {isVerified && <span>Verified</span>}

      {/* Show empty state only when no messages */}
      {messages.length === 0 && <p>No messages yet</p>}

      {/* Show list only when messages exist */}
      {messages.length > 0 && (
        <ul>
          {messages.map((msg: string, i: number) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      )}

      {/* Using messages.length directly can render 0 when the array is empty,
          because 0 is a value that React displays. Using
          messages.length > 0 returns a boolean, so nothing is rendered when
          the array is empty. */}
    </div>
  );
}

export default StatusBadge;