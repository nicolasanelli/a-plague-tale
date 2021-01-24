import { useEffect, useState } from "react";
import socket from '../connections/Socket'

const Resources = () => {

  const [qtdMadeira, setQtdMadeira] = useState(0);
  const [qtdArgila, setQtdArgila] = useState(0);
  const [qtdPedra, setQtdPedra] = useState(0);

  useEffect(() => {
    socket.on("updatedResources", (data: { qtdMadeira: number, qtdArgila: number, qtdPedra: number }) => {
      setQtdMadeira(data.qtdMadeira)
      setQtdArgila(data.qtdArgila)
      setQtdPedra(data.qtdPedra)
    });
  }, []);

  return (
    <>
    <ul>
      <li>Madeira: { qtdMadeira }</li>
      <li>Argila: { qtdArgila }</li>
      <li>Pedra: { qtdPedra }</li>
    </ul>
    </>
  );
}

export default Resources;