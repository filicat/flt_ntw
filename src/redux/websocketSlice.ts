// src/features/websocket/websocketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id: string;
  content: string;
}

export interface WebSocketState {
  socket: WebSocket | null;
  messages: Message[];
  isConnected: boolean;
}

const initialState: WebSocketState = {
  socket: null,
  messages: [],
  isConnected: false,
};

const websocketSlice = createSlice({
  name: 'websocketFav',
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<WebSocket>) => {
      state.socket = action.payload;
      state.isConnected = true;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    disconnect: (state) => {
      if (state.socket) {
        state.socket.close();
        state.socket = null;
        state.isConnected = false;
      }
    },
  },
});

export const { setSocket, addMessage, disconnect } = websocketSlice.actions;

export default websocketSlice.reducer;