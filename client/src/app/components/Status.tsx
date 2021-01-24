import { useEffect, useState } from "react";
import socket from '../connections/Socket'

const Status = () => {

  const [datetime, setDatetime] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    socket.on("updatedDate", (data: { date: string, id: string }) => {
      setDatetime(data.date)
      setId(data.id)
    });
  }, []);

  return (
    <>
    <ul>
      <li>Server time: { datetime }</li>
      <li>Session id: { id }</li>
    </ul>
    </>
  );
}

export default Status;