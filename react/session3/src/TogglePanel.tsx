import { useState } from "react"

function TogglePanel() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (

    <div>

      <button onClick={() => setIsOpen(prev => !prev)}>

        {isOpen ? "Hide Details" : "Show Details"}

      </button>

      {isOpen && (

        <div>

          <p>Name: Rahul</p>

          <p>Score: 92</p>

          <p>Role: Frontend</p>

        </div>

      )}

      {/* The functional update form (prev => !prev) is safer because it
          always uses the latest state value. It prevents issues when
          multiple state updates happen quickly or asynchronously.
          setIsOpen(!isOpen) may use an outdated value in those cases. */}

    </div>

  )
}

export default TogglePanel