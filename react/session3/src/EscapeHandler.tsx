import { useState, useEffect } from "react"

function EscapeHandler() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {

    if (!isOpen) return

    function handleKeyDown(e: KeyboardEvent): void {

      console.log("keydown fired")

      if (e.key === "Escape") {
        setIsOpen(false)
      }

    }

    window.addEventListener("keydown", handleKeyDown)

    // Cleanup removes the event listener when the panel closes or before the
    // effect runs again. Without cleanup, multiple listeners would remain,
    // causing repeated event handling and memory leaks.
    return () => window.removeEventListener("keydown", handleKeyDown)

  }, [isOpen])

  return (

    <div>

      <button onClick={() => setIsOpen(true)}>
        Open Panel
      </button>

      {isOpen && (

        <div
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            marginTop: "8px",
          }}
        >

          <p>Panel is open. Press Escape to close.</p>

          <button onClick={() => setIsOpen(false)}>
            Close
          </button>

        </div>

      )}

    </div>

  )

}

export default EscapeHandler