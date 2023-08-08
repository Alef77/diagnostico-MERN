import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TareasApp } from './TareasApp';
import { LogReg } from './LogReg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareasApp />
  </React.StrictMode>,
)
