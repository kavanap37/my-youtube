import { createSlice } from "@reduxjs/toolkit";
 import { LIVE_CHAT_COUNT } from "./constants";
 
 const chatSlice = createSlice({
   name: "chat",
   initialState: {
     messages: [],
   },
   reducers: {
     addMessage: (state, action) => {
      if(state.messages.length===LIVE_CHAT_COUNT)
        state.messages.splice(0, 1);
      //  if(state.messages.length===LIVE_CHAT_COUNT)state.messages.unshift();
       state.messages.push(action.payload);
     },
   },
 });
 
 export const { addMessage } = chatSlice.actions;
 export default chatSlice.reducer;