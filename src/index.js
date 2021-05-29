import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*html의 root부분에 app을 렌더링 하는 것. 
react는 소스코드에 처음부터 html을 넣지 않고,
html에서 html 부분을 추가하거나 제거한다
빈 html을 불러오고 react가 그안에 컴포넌트를 집어넣음

버츄얼 DOM(document object model)을 만들어내는 것임*/
