import { Button, Divider, Header } from "semantic-ui-react";
import Socket from '../connections/Socket'
import { ReactComponent as Alcohol } from '../../assets/svgs/alcohol.svg'
import { ReactComponent as Cloth } from '../../assets/svgs/cloth.svg'
import { ReactComponent as Episanguis } from '../../assets/svgs/episanguis.svg'
import { ReactComponent as Leather } from '../../assets/svgs/leather.svg'
import { ReactComponent as Rock } from '../../assets/svgs/rock.svg'
import { ReactComponent as Saltpeter } from '../../assets/svgs/saltpeter.svg'
import { ReactComponent as String } from '../../assets/svgs/string.svg'
import { ReactComponent as Sulfur } from '../../assets/svgs/sulfur.svg'

const Environment = () => {

  const getMoreRocks = () => {
    Socket.emit('getRocks');
  }
  const getMoreJars = () => {
    Socket.emit('getJars');
  }

  const getMoreSulfur = () => {
    Socket.emit('getSulfur');
  }
  const getMoreSaltpeter = () => {
    Socket.emit('getSaltpeter');
  }
  const getMoreAlcohol = () => {
    Socket.emit('getAlcohol');
  }
  const getMoreEpisanguis = () => {
    Socket.emit('getEpisanguis');
  }

  const getMoreCloth = () => {
    Socket.emit('getCloth');
  }
  const getMoreLeather = () => {
    Socket.emit('getLeather');
  }
  const getMoreString = () => {
    Socket.emit('getString');
  }

  return (
    <>
      <Header as='h2' dividing>
        Environment
      </Header>
      <Button onClick={getMoreRocks}>
        <Rock style={{ marginRight: "4px" }} width={12} height={12} />
        Pedras
      </Button>
      <Button onClick={getMoreJars}>
        <Rock style={{ marginRight: "4px" }} width={12} height={12} />
        Jarro
      </Button>
      <Divider />
      <Button onClick={getMoreSulfur}>
        <Sulfur style={{ marginRight: "4px" }} width={12} height={12} />
        Enxofre
      </Button>
      <Button onClick={getMoreSaltpeter}>
        <Saltpeter style={{ marginRight: "4px" }} width={12} height={12} />
        Salitre
      </Button>
      <Button onClick={getMoreAlcohol}>
        <Alcohol style={{ marginRight: "4px" }} width={12} height={12} /> 
        Álcool
      </Button>
      <Button onClick={getMoreEpisanguis}>
        <Episanguis style={{ marginRight: "4px" }} width={12} height={12} />
        Episanguis
      </Button>
      <Divider />
      <Button onClick={getMoreCloth}>
        <Cloth style={{ marginRight: "4px" }} width={12} height={12} />
        Tecido
      </Button>
      <Button onClick={getMoreLeather}>
        <Leather style={{ marginRight: "4px" }} width={12} height={12} />
        Couro
      </Button>
      <Button onClick={getMoreString}>
        <String style={{ marginRight: "4px" }} width={12} height={12} />
        Barbante
      </Button>
    </>
  );
}

export default Environment;