import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from 'Styles/globalStyle';

render(
  <React.StrictMode>
    <GlobalStyle />
    <div>하이, 핫리로딩123</div>
  </React.StrictMode>,
  document.getElementById('root')
);