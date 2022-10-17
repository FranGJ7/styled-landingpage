import {
  Container,
  Logo,
  NavContainer,
  NavItem,
  ChangeTheme,
} from "./styles";

export const Header = ({ actualTheme, changeTheme }) => {
  return (
    <Container>
        <Logo/>
      <NavContainer>
        {/*<ChangeTheme themeImage={actualTheme.title} onClick={changeTheme} />*/}
        <NavItem>Início</NavItem>
        <NavItem>Contatos</NavItem>
        <NavItem>Sobre nós</NavItem>
      </NavContainer>
    </Container>
  );
}