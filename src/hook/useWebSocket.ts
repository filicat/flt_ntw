// src/hooks/useWebSocket.ts
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message, WebSocketState, addMessage, disconnect, setSocket } from '../redux/websocketSlice';

const useWebSocket = () => {
    const dispatch = useDispatch();
    const { socket, isConnected, messages } = useSelector((state: { websocket: WebSocketState }) => state.websocket);
    const [isConnecting, setIsConnecting] = useState(false);
  
    useEffect(() => {
      if (isConnecting && !isConnected) {
        const newSocket = new WebSocket('ws://your-websocket-url');
  
        newSocket.onopen = () => {
          console.log('WebSocket connection established');
          dispatch(setSocket(newSocket));
          setIsConnecting(false);
        };
  
        newSocket.onmessage = (event) => {
          const message: Message = JSON.parse(event.data);
          dispatch(addMessage(message));
        };
  
        newSocket.onclose = () => {
          console.log('WebSocket connection closed');
          dispatch(disconnect());
        };
  
        return () => {
          newSocket.close();
        };
      }
    }, [isConnecting, isConnected, dispatch]);
  
    const connect = () => {
      if (!isConnected) {
        setIsConnecting(true);
      }
    };
  
    return { isConnected, messages, connect };
  };
  
  export default useWebSocket;