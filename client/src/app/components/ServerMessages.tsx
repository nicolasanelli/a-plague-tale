import { useEffect, useState } from "react";
import { Header, Message, Segment, Transition } from "semantic-ui-react";
import Socket from '../connections/Socket'

interface MessageInterface {
  date: string,
  message: string,
  level: string
}

const ServerMessages = () => {

  const [messages, setMessages] = useState<MessageInterface[]>([]);

  useEffect(() => {
    Socket.on("message", (data: MessageInterface) => {
      setMessages(m => [ ...m, data ])
    });
  }, []);

  return (
    <>
      <Header attached='top' as='h4' icon="server" content="Server messages" inverted />
      <Segment attached='bottom' tertiary style={{ fontSize: "11px", height: "80vh", overflowY: 'scroll' }}>
        <Transition.Group
            duration={800}
            animation="fade down"
          >
        { [ ...messages ].reverse().map((m) => 
          <Message key={m.date} 
            info={m.level === 'info'}
            error={m.level === 'error'}
            > 
          <strong>{new Date(m.date).toLocaleString()}</strong> {m.message} </Message>
        )}
        </Transition.Group>
      </Segment>
    </>
  );
}

export default ServerMessages;