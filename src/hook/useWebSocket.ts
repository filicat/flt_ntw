// src/hooks/useWebSocket.ts
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message, WebSocketState, addMessage, disconnect, setSocket } from '../redux/websocketSlice';
import { RootState } from '../redux/store';
import { Md5 } from 'ts-md5';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { JegResult } from '../types';
const useWebSocket = () => {
    const dispatch = useDispatch();
    const { socket, isConnected, messages } = useSelector((state: { websocketFav: WebSocketState }) => state.websocketFav);
    const [isConnecting, setIsConnecting] = useState(false);
    const { token, userInfo } = useSelector((state: RootState) => state.auth);
  
    useEffect(() => {
      if (isConnecting && !isConnected) {
        const url = 'ws://172.16.5.142:8080/jeecg-boot/websocket/e9ca23d68d884d4ebb19d07889727dae_' + Md5.hashStr(token||'');
        // console.log('WebSocket connecting to:', url);
        // console.log('token:', token);
        const newSocket = new WebSocket(url, [token||'']);
        // console.log('newSocket:', newSocket);

        newSocket.onopen = () => {
          console.log('WebSocket connection established');
          dispatch(setSocket(newSocket));
          setIsConnecting(false);
        };
  
        newSocket.onmessage = (event) => {
          console.log('Received message data:', event.data);
          const message = JSON.parse(event.data)
          console.log('Received message data trans:', message);
          message.timestamp = new Date().getTime();
          dispatch(addMessage(message));
        };
  
        newSocket.onclose = () => {
          console.log('WebSocket connection closed');
          dispatch(disconnect());
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