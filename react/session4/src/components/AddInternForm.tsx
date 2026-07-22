import useInternForm from '../hooks/useInternForm'
import { useInterns } from '../contexts/intern-context'

function AddInternForm() {

  const {
    form,
    error,
    handleChange,
    handleReset,
    isValid,
  } = useInternForm()

  const {
    addIntern,
    interns,
  } = useInterns()

  function handleSubmit(): void {

    if (!isValid()) return

    addIntern({
      id: interns.length + 1,
      ...form,
    })

    handleReset()
  }

  return (
    <div data-testid="add-intern-form">

      {error && (
  <p role="alert" style={{ color: 'red' }}>
    {error}
  </p>
)}

      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="score"
        type="number"
        value={form.score}
        onChange={handleChange}
        placeholder="Score"
      />

     <label>
  <input
    name="isPresent"
    type="checkbox"
    checked={form.isPresent}
    onChange={handleChange}
  />
  Present
</label>

      <label>
  Role
  <select
    name="role"
    value={form.role}
    onChange={handleChange}
  >
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    <option value="Fullstack">Fullstack</option>
  </select>
</label>

      <br />
      <br />

      <button onClick={handleSubmit}>
        Add Intern
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

    </div>
  )
}

export default AddInternForm