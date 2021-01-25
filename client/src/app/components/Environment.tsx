import { Button, Divider, Header } from "semantic-ui-react";
import Socket from '../connections/Socket'
import alcohol from './svgs/alcohol.svg'
import cloth from './svgs/cloth.svg'
import episanguis from './svgs/episanguis.svg'
import leather from './svgs/leather.svg'
import rock from './svgs/rock.svg'
import saltpeter from './svgs/saltpeter.svg'
import string from './svgs/string.svg'
import sulfur from './svgs/sulfur.svg'

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
        <img style={{ marginRight: "4px" }} height={12} src={ rock } alt="Rocks" /> Pedras
      </Button>
      <Button onClick={getMoreJars}>
        <img style={{ marginRight: "4px" }} height={12} src={ rock } alt="Jar" /> Jarro
      </Button>
      <Divider />
      <Button onClick={getMoreSulfur}>
        <img style={{ marginRight: "4px" }} height={12} src={ sulfur } alt="Sulfur" /> Enxofre
      </Button>
      <Button onClick={getMoreSaltpeter}>
        <img style={{ marginRight: "4px" }} height={12} src={ saltpeter } alt="Saltpeter" /> Salitre
      </Button>
      <Button onClick={getMoreAlcohol}>
        <img style={{ marginRight: "4px" }} height={12} src={ alcohol } alt="Alcohol" /> Álcool
      </Button>
      <Button onClick={getMoreEpisanguis}>
        <img style={{ marginRight: "4px" }} height={12} src={ episanguis } alt="Episanguis" /> Episanguis
      </Button>
      <Divider />
      <Button onClick={getMoreCloth}>
        <img style={{ marginRight: "4px" }} height={12} src={ cloth } alt="Cloth" /> Tecido
      </Button>
      <Button onClick={getMoreLeather}>
        <img style={{ marginRight: "4px" }} height={12} src={ leather } alt="Leather" /> Couro
      </Button>
      <Button onClick={getMoreString}>
        <img style={{ marginRight: "4px" }} height={12} src={ string } alt="String" /> Barbante
      </Button>
    </>
  );
}

export default Environment;