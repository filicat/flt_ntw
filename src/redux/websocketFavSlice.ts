// src/features/websocket/websocketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  msgId: string;
  cmd: string;
  msgTxt: string;
  timestamp?: number;
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
    removeMessage: (state, action: PayloadAction<Message>) => {
      const indexToRemove = state.messages.findIndex(message => message.msgId === action.payload.msgId);
      // 如果找到了对应的索引，则使用 splice 方法移除该元素
      if (indexToRemove !== -1) {
        state.messages.splice(indexToRemove, 1);
      };
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

export const { setSocket, addMessage, removeMessage, disconnect } = websocketSlice.actions;

export default websocketSlice.reducer;