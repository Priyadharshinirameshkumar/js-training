function SkillList() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
  ];

  return (
    <div>
      <h3>Skills Covered</h3>

      <ul>
        {skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>Total: {skills.length} skills</p>

      {/* React uses the key prop to uniquely identify each list item.
          Without keys, React shows a warning because it cannot efficiently
          track changes when items are added, removed, or reordered. */}
    </div>
  );
}

export default SkillList;