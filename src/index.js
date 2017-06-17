import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'flexboxgrid/dist/flexboxgrid.css';
import './styles.css';

window.React = React;

render(
    <App />,
    document.getElementById('root')
);