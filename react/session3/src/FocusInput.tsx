import { useRef } from "react"

function FocusInput() {

  // useRef stores a reference to the input element so we can access it directly.
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocus(): void {

    inputRef.current?.focus()

  }

  function handleClear(): void {

    if (inputRef.current) {

      inputRef.current.value = ""

      inputRef.current.focus()

    }

  }

  return (

    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

      <button onClick={handleClear}>
        Clear and Focus
      </button>

      {/* Optional chaining (?.) safely calls focus() only if current is not null.
          current is null before the input is mounted or after it is unmounted,
          so optional chaining prevents a runtime error. */}

    </div>

  )

}

export default FocusInput