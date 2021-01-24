import Header from './layout/Header';
import Status from './components/Status';
import { Container } from 'semantic-ui-react';
import Resources from './components/Resources';

const App = () => {
  return (
    <>
      <Header />
      <Container fluid={ true } style={{ padding: '5em 0em' }}>
        <Status />
        <Resources />
      </Container>
      {/* <Example />
      <BootstrapMigrationLayout /> */}
    </>
  );
}

export default App;
