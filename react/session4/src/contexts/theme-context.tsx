import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// The context starts as null because no Provider has supplied a value yet.
// This helps detect if the hook is used outside the ThemeProvider.
const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme(): void {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  // Throwing an error makes it clear that the hook must be used
  // inside ThemeProvider instead of causing null reference errors.
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}