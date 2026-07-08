function SelfLearning() {
  return (
    <div>
      <h2>React Session 1 - Self Learning</h2>

      {/* React.StrictMode is a development tool that helps identify potential
          problems in a React application. It checks for unsafe lifecycle methods,
          unexpected side effects, and other issues. It only affects development
          and does not change the production build. */}

      {/* Controlled components use React state to manage form input values.
          Uncontrolled components store their own values in the DOM and are
          accessed using refs. Controlled components provide better control and
          validation of user input. */}

      {/* The key prop helps React identify each item in a list so it can update
          the UI efficiently. Using the array index as a key is not recommended
          when items can be added, removed, or reordered because it may cause
          incorrect UI updates. A unique id from the data should be used instead. */}

      {/* Fragments (<>...</>) group multiple elements without adding extra HTML
          elements to the DOM. The shorthand fragment cannot receive a key prop.
          To use a key, use <React.Fragment key={...}> when rendering lists of
          fragments. */}

      <p>Self-learning notes added as comments.</p>
    </div>
  );
}

export default SelfLearning;