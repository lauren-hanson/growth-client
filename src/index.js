import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import Growth from './Growth';


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Growth />
  </BrowserRouter>
);

