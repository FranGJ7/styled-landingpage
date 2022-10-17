 import {Header} from "./components/Header"
 import GlobalStyle from "./global/Global"
 import { ThemeProvider } from "styled-components";
 import { useState } from "react";
 import { darkTheme, lightTheme } from "./global/styles/Theme";
 import { ProductPage } from "./components/ProductPage";
 
 export const App = () =>{
    
   const [theme, setTheme] = useState(darkTheme)

   const handleChangeTheme = ()=>{setTheme(theme === darkTheme ? lightTheme : darkTheme)}

  return (
    <ThemeProvider theme={theme}>
      <Header actualTheme={theme} changeTheme={handleChangeTheme} />
      <ProductPage/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}
export default App;
