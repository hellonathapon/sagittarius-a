import React from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { GlobalStyles } from './globalStyles'
import { useDarkMode } from './utils/useDarkMode';
import { Header, Star } from './components';
import * as S from './styles';

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
      
  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <>
        <GlobalStyles/>
        <div className="App">
          <Header />
          <S.Body>
            <h1>{ theme === "light"? "Light Side" : "Dark Side"}</h1>
            <button
              onClick={ toggleTheme }
            >Mode</button>
            <Star theme={ theme }/>
          </S.Body>
        </div> 
      </>
    </ThemeProvider>
  );
}

export default App;
