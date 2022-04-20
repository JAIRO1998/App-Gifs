import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import GifExpertApp from './GifExpertApp';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(  
    <GifExpertApp />
);
