import { Button, Header } from "semantic-ui-react";
import Socket from '../connections/Socket'


const Crafting = () => {

  const craftIgnifer = () => {
    Socket.emit('craftIgnifer');
  }
  const craftExtinguis = () => {
    Socket.emit('craftExtinguis');
  }
  const craftSomnum = () => {
    Socket.emit('craftSomnum');
  }
  const craftLuminosa = () => {
    Socket.emit('craftLuminosa');
  }
  const craftOdoris = () => {
    Socket.emit('craftOdoris');
  }
  const craftDevorantis = () => {
    Socket.emit('craftDevorantis');
  }

  return (
    <>
      <Header as='h2' dividing>
        Crafting
      </Header>
      <Button onClick={craftIgnifer}>Ignifer</Button>
      <Button onClick={craftExtinguis}>Extinguis</Button>
      <Button onClick={craftSomnum}>Somnum</Button>
      <Button onClick={craftLuminosa}>Luminosa</Button>
      <Button onClick={craftOdoris}>Odoris</Button>
      <Button onClick={craftDevorantis}>Devorantis</Button>
    </>
  );
}

export default Crafting;