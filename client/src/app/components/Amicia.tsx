import { useEffect, useState } from "react";
import { Grid, Header, List } from "semantic-ui-react";
import Socket from "../connections/Socket";

interface Game {
  char: {
    qtdPedras: number,
    qtdJarros: number,
    qtdEnxofre: number,
    qtdSalitre: number,
    qtdAlcool: number,
    qtdEpisanguis: number,
    qtdTecidos: number,
    qtdCouro: number,
    qtdBarbantes: number,
    qtdIgnifer: number,
    qtdExtinguis: number,
    qtdSomnum: number,
    qtdLuminosa: number,
    qtdOdoris: number,
    qtdDevorantis: number
  }
}

const Amicia = () => {

  const [game, setGame] = useState<Game>();

  useEffect(() => {
    Socket.on("updateGame", (data: Game) => {
      setGame(data)
    });
  }, []);

  return (
    <>
      <Header as='h2' dividing>
        Amicia
      </Header>
      
      <Grid>
        <Grid.Row divided>
          <Grid.Column width={8} >
            <strong>Inventário:</strong>
            <List>
              <List.Item>{game?.char.qtdPedras} Pedras</List.Item>
              <List.Item>{game?.char.qtdJarros} Jarros</List.Item>
            </List>
            <strong>Recursos:</strong>
            <List>
              <List.Item>{game?.char.qtdEnxofre} Enxofre</List.Item>
              <List.Item>{game?.char.qtdSalitre} Salitre</List.Item>
              <List.Item>{game?.char.qtdAlcool} Alcool</List.Item>
              <List.Item>{game?.char.qtdEpisanguis} Episanguis</List.Item>
            </List>
            <strong>Materiais:</strong>
            <List>
              <List.Item>{game?.char.qtdTecidos} Tecido</List.Item>
              <List.Item>{game?.char.qtdCouro} Couro</List.Item>
              <List.Item>{game?.char.qtdBarbantes} Barbante</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={8} >
            <strong>Projéteis:</strong>
            <List>
              <List.Item>{game?.char.qtdIgnifer} Ignifer</List.Item>
              <List.Item>{game?.char.qtdExtinguis} Extinguis</List.Item>
              <List.Item>{game?.char.qtdSomnum} Somnum</List.Item>
              <List.Item>{game?.char.qtdLuminosa} Luminosa</List.Item>
              <List.Item>{game?.char.qtdOdoris} Odoris</List.Item>
              <List.Item>{game?.char.qtdDevorantis} Devorantis</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Amicia;