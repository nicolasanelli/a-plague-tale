import Header from './layout/Header';
import BootstrapMigrationLayout from './example-components/BootstrapMigrationLayout';
import Example from './example-components/Example';
import Resources from './components/Resources';
import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <>
      <Header />
      <Container fluid={ true } style={{ padding: '5em 0em' }}>
        <Resources />
      </Container>
      {/* <Example />
      <BootstrapMigrationLayout /> */}
    </>
  );
}

export default App;
