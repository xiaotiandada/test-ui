import React from 'react';
import logo from './logo.svg';

import { Button as ButtonMaterial } from '@mui/material';
import { Button } from 'antd';

import './App.css';
import GeistUI from './GeistUI';
import ReactHookForm from './ReactHookForm';
import ClassValidator from './ClassValidator';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <ButtonMaterial variant="contained" color="primary">
          Hello World
        </ButtonMaterial>
        <hr />
        <Button type="primary">Hello World</Button>
        <hr />
        <GeistUI />
        <hr />
        <ReactHookForm />
        <hr />
        <ClassValidator />
      </div>
    </>
  );
}

export default App;
