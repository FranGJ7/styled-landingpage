import styled from "styled-components";

export const Container = styled.header`
   width: 100%;
   height: 60px;
   border-bottom: 1px solid #bbb;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const Logo = styled.img.attrs({
    src: "./logoOnebitcode.svg",
    alt:"Logo"
})`
  width:150px; 
`

export const NavContainer = styled.ul`
    display: flex;
    gap:10px;
    list-style:none;
`
export const NavItem = styled.li`
    cursor: pointer;
    transition: 0.4;
    list-style:none;
    &:hover{
        color:#ff0044;
    }
`