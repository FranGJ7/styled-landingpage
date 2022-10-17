import styled from "styled-components";

export const Container = styled.header`
   width: 100%;
   height: 60px;
   border-bottom: 1px solid #bbb;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const Logo = styled.img.attrs((props)=>({
    src: props.themeImage === "light" ? "../logoCta.png" : "../favicon.svg",
    alt:"Logo"
}))`
  width: 60px;
  padding: 15px;
`

export const NavContainer = styled.ul`
    display: flex;
    gap:10px;
    list-style:none;
    padding: 30px;
`
export const NavItem = styled.li`
    cursor: pointer;
    transition: 0.4;
    display: flex;
    align-items: center;
    list-style:none;
    &:hover{
        color:#ff0044;
    }
`
export const ChangeTheme = styled.img.attrs((props) => ({
    src: props.themeImage === "light" ? "../sun.png" : "../moon.png",
    alt: "changeThemeLogo",
  }))`
    width: 28px;
    cursor: pointer;
  `