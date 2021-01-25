import { Container, Menu } from "semantic-ui-react"

const Nav = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          Amicia Inventary
        </Menu.Item>
      </Container>
    </Menu>
  )
};

export default Nav;