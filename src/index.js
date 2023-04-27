import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { StyleProvider } from "@ant-design/cssinjs";
import 'antd/dist/reset.css';


//cấu hình realtime (Websocket với singalr)
import * as signalR from '@aspnet/signalr';



// Đoạn code để kết nối đến server để lắng nghe server
const DOMAIN = "https://movienew.cybersoft.edu.vn";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.start()
.then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </Provider>
  )
})
.catch(error => console.log(error))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
