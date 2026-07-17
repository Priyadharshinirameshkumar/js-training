// import {type ReactNode } from "react"

// interface CardProps {
//   title: string
//   children: ReactNode
// }

// function Card({ title, children }: CardProps) {
//   return (
//     <div className="card">
//       <h3 className="card-title">{title}</h3>

//       <div className="card-body">
//         {children}
//       </div>

//       {/* ReactNode represents anything React can render, such as text,
//           JSX elements, components, arrays, or fragments. It is the
//           correct type for the children prop because it allows the Card
//           component to display any valid React content. */}
//     </div>
//   )
// }

// export default Card



//task 4.2

import { type ReactNode } from "react"

interface CardProps {
  title: string
  children?: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>

      {children && (
        <div className="card-body">
          {children}
        </div>
      )}

      {/* A required children prop means the component must always receive content.
          An optional children prop allows the component to be used with or without content.
          Use required children when content is essential, and optional children when
          the component should still work even if no content is provided. */}
    </div>
  )
}

export default Card