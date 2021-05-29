import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//<App/> 이것을 컴포넌트라 한다. 컴포넌트가 데이터를 보여주게된다.
// 컴포넌트는 HTML을 반환하는 함수
// 리액트에서 컴포넌트 사용은 HTML형식으로 표현 <앱> 이렇게
// 이러한 자바스크립트와 html의 조합을 jsx라한다.
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

버츄얼 DOM(document object model)을 만들어내는 것임
리액트 애플리케이션은 하나의 컴포넌트만을 렌더링한다.
현재 APP만이 가능
*/
