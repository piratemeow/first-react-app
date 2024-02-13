import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';



// d2621646


// ReactDom.render(
//     <App/>,
//     document.getElementById('root')
// );

const domnode = document.getElementById('root')
const root = createRoot(domnode);
root.render(<App/>);

