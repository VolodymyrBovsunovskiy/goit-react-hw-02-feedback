import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import styled from "styled-components";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);
export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  max-width: 580px;

 
  border-radius: 10px;
`;
