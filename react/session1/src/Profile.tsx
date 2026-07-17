function Profile() {
  const name: string = "Rahul";
  const role: string = "Intern";
  const score: number = 92;
  const joinDate: string = "2026-06-30";
  const avatarUrl: string = "https://i.pravatar.cc/100";
const altText: string = `Avatar of ${name}`;

  return (
    <div>
        <img src={avatarUrl} alt={altText} width={100} />
      <h2>{name}</h2>

      <p>Role: {role}</p>

      <p>Score: {score} / 100</p>

      <p>Name uppercase: {name.toUpperCase()}</p>

      <p>Score doubled: {score * 2}</p>

      <p>Joined: {new Date(joinDate).toDateString()}</p>

      {/* TSX expressions use {} to evaluate JavaScript values and display them.
          Statements like if and for cannot be written directly inside TSX because
          they do not return a value. Use expressions like ternary operators,
          &&, or Array.map() instead. */}

      {/* width={100} passes a number, while width="100" passes a string.
          In TSX, use {} when passing JavaScript values like numbers,
          variables, or expressions. Use quotes for plain text strings. */}
    </div>
  );
}

export default Profile;