import { createContext, useContext, useEffect, useState } from 'react'

export interface UseThemeProps {
  isDarkMode: boolean
  /**
   * Toggle between dark mode and light mode.
   *
   * If `darkMode` left `undefined`, toggles between modes.
   *
   * If `darkMode` set, forces
   * dark mode if `true` and light mode if `false`.
   */
  toggleTheme: (darkMode?: boolean) => void
}

interface ThemeProviderProps {
  children?: any
}

export const ThemeContext = createContext<UseThemeProps>({
  isDarkMode: true, // Default to dark mode in context initialization
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    const key = localStorage.getItem('DarkMode')
    const mode = key === 'true'

    // Check if the user has a dark mode preference set in localStorage, otherwise default to dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (key !== null) {
      toggleTheme(mode)
    } else {
      toggleTheme(true)
    }
  }, [])

  const toggleTheme: UseThemeProps['toggleTheme'] = (darkMode) => {
    const newMode = typeof darkMode === 'boolean' ? darkMode : !isDarkMode
    localStorage.setItem('supabaseDarkMode', newMode.toString())

    const newTheme = newMode ? 'dark' : 'light'

    document.body.classList.remove('light', 'dark')
    document.body.classList.add(newTheme)

    // Color scheme must be applied to document element (`<html>`)
    document.documentElement.style.colorScheme = newTheme

    setIsDarkMode(newMode)
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          isDarkMode,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  )
}
