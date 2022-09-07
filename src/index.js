import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Feed from './routes/FeedPage'
// import Home3Page from './routes/Home3Page'
// import PerfilPage from './routes/PerfilPage'

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />} />
//       <Route path='/feed' element={<Feed />} />
//       <Route path='/home3' element={<Home3Page />} />
//       <Route path='/perfil' element={<PerfilPage />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

