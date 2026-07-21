import { type ReactNode, type ReactElement } from "react"
import React from 'react';
// ------------------------------------------------------------------
// Task 1 - React.FC
// ------------------------------------------------------------------

// React.FC is another way to type a React function component.
// It automatically includes some React component typings.
// Typing the props parameter directly is simpler and is the
// recommended approach in modern React because it is more explicit.

// ------------------------------------------------------------------
// Task 2 - PropsWithChildren
// ------------------------------------------------------------------

// PropsWithChildren automatically adds an optional children prop
// to your interface. It is a shortcut instead of manually writing
// children: ReactNode in every interface.

// ------------------------------------------------------------------
// Task 3 - key Prop
// ------------------------------------------------------------------

// The key prop is used internally by React to identify list items
// during rendering and updates. It is not passed to the component,
// so props.key is always undefined. React uses keys to efficiently
// update only the changed elements in a list.

// ------------------------------------------------------------------
// Task 4 - Multiple ReactNode Slots
// ------------------------------------------------------------------

interface PageLayoutProps {
  header: ReactNode
  children: ReactNode
  footer: ReactNode
}

function PageLayout({
  header,
  children,
  footer,
}: PageLayoutProps) {
  return (
    <div>
      <header
        style={{
          background: "#f0f0f0",
          padding: "12px",
        }}
      >
        {header}
      </header>

      <main
        style={{
          padding: "16px",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          background: "#f0f0f0",
          padding: "12px",
        }}
      >
        {footer}
      </footer>
    </div>
  )
}

// Children are passed between the opening and closing tags of a component.
// Named props such as header and footer allow different content to be placed
// in specific locations. Use named slots when a layout needs multiple
// predefined content areas.

// ------------------------------------------------------------------
// Task 5 - ReactNode vs ReactElement vs JSX.Element
// ------------------------------------------------------------------

// ReactNode accepts almost anything React can render.
interface WrapperProps {
  content: ReactNode
}

function Wrapper({
  content,
}: WrapperProps) {
  return <div>{content}</div>
}

// ReactElement only accepts JSX elements.
interface IconButtonProps {
  icon: ReactElement
  label: string
}

function IconButton({
  icon,
  label,
}: IconButtonProps) {
  return (
    <button>
      {icon} {label}
    </button>
  )
}

// JSX.Element also expects a JSX element.
interface TooltipProps {
  trigger: React.JSX.Element
  tip: string
}

function Tooltip({
  trigger,
  tip,
}: TooltipProps) {
  return (
    <span title={tip}>
      {trigger}
    </span>
  )
}

// ReactNode accepts any renderable value such as text, numbers,
// JSX elements, arrays, null, and undefined.
//
// ReactElement accepts only actual JSX elements.
//
// JSX.Element is similar to ReactElement and is used when a JSX
// element is specifically required.

// ------------------------------------------------------------------
// Main Component
// ------------------------------------------------------------------

function SelfLearning() {
  return (
    <div>

      <PageLayout
        header={<h1>Intern Dashboard</h1>}
        footer={<p>© 2026 Aarvihsolutions</p>}
      >
        <p>Main content goes here as children.</p>

        <p>
          Any JSX works — text, elements, or other
          components.
        </p>
      </PageLayout>

      <hr />

      <Wrapper
        content="This text is passed as ReactNode."
      />

      <Wrapper
        content={<strong>Bold ReactNode</strong>}
      />

      <IconButton
        icon={<span>⭐</span>}
        label="Favourite"
      />

      <br />
      <br />

      <Tooltip
        trigger={<button>Hover Me</button>}
        tip="Tooltip Example"
      />

      {/*
      Uncomment these to observe TypeScript errors.

      <IconButton
        icon="Star"
        label="Wrong"
      />

      <Tooltip
        trigger={null}
        tip="Wrong"
      />
      */}

    </div>
  )
}

export default SelfLearning