import Nav from './layout/Nav';
import { Container, Grid } from 'semantic-ui-react';
import ServerMessages from './components/ServerMessages';
import Environment from './components/Environment';
import Amicia from './components/Amicia';
import Crafting from './components/Crafting';

const App = () => {
  return (
    <>
      <Nav />
      <Container fluid={ true } style={{ padding: '5em 2em 0em 2em' }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12} >
              <Environment />
              <Crafting />
              <Amicia />
            </Grid.Column>
            <Grid.Column width={4} >
              <ServerMessages />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default App;
