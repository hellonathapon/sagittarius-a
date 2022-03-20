import React from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './globalStyles'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <>
        <GlobalStyles/>
        <div className="App">
        <header className="App-header">
          <h1>hello world</h1>
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleTheme}
            size={50}
          />
        </header>
      </div> 
      </>
    </ThemeProvider>
  );
}

export default App;
