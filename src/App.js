import React from 'react'

function Movie( {name,image} ){  
  return( <div>
            <h1> { name }</h1>
            <img src = {image}/>
          </div>
  );
}
/* 아래에서 movie에 props들을 전달하게 된다.
 movie 함수의 아규먼트로 모두 가져온다.*/
 
 /*동적데이터 가져오기
 API에서 무비리스트에 데이터를 가져왔다고 가정 */

const MovieList = [
    {
      id: 1,
      name : "FF9",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=yG1lVvQa&id=27B044CA6E5D1A817EAB77404977940A31F5B3BB&thid=OIP.yG1lVvQaFZyJHI4s5ENrLQHaD4&mediaurl=https%3a%2f%2fup-template.azureedge.net%2f_FileData%2fM0302%2f202003%2f17%2ff715b27081aa07208ec742492fb359ab.jpg&exph=630&expw=1200&q=%eb%b6%84%eb%85%b8%ec%9d%98+%ec%a7%88%ec%a3%bc+%ec%96%bc%ed%8b%b0%eb%a9%94%ec%9d%b4%ed%8a%b8&simid=607991159604316224&ck=D94B68A01A76554FF8612C2291204FE1&selectedIndex=0&FORM=IRPRST"
    },
    {
      id: 2,
      name : "크루엘라",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=Y%2bcGCAB9&id=D3C86F3D6EABE813B38DEBF95428050D7906E791&thid=OIF.9fQHEiIv9SQ7BKuPxLBv7w&mediaurl=https%3a%2f%2fpds.joins.com%2fnews%2fcomponent%2fhtmlphoto_mmdata%2f202105%2f27%2ffa9ad18b-11ad-420b-8e55-7de2dc3ccc1f.jpg&exph=798&expw=560&q=%ed%81%ac%eb%a3%a8%ec%97%98%eb%9d%bc&simid=219166805694&ck=F5F40712222FF5243B04AB8FC4B06FEF&selectedIndex=0&FORM=IRPRST"
    },
    {
      id: 3,
      name : "the spy",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=rarXk4Vl&id=0220EEC484E23B76250EF74000524458D00E0D25&thid=OIF.5Z3aEHYa095rHqLJoVAHAw&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fK7roTitsmiw%2fmaxresdefault.jpg&exph=720&expw=1280&q=%eb%8d%94+%ec%8a%a4%ed%8c%8c%ec%9d%b4&simid=81726944725&ck=E59DDA10761AD3DE6B1EA2C9A1500703&selectedIndex=1&FORM=IRPRST"
    }
]

function renderMovie(info){
  
  return <Movie name ={info.name} picture = {info.image}/>
}

function App() {
  return ( <div className="App">

    {/*자식 컴포넌트에 데이터 전달하기
    <Movie 
    name = "FF9"
    day = "5월 29일"
    actors = {['vin', 'john']}/> 
    무비 컴포넌트에 FF9이라는 value로 prop name을 주었다
    그 외에도 prop은 다수 보내줄 수 있다.*/ }

    {/*자바스크립트의 map을 이용하기
    map은 배열의 각 item을 입력으로 해서 함수를 실행
    그 실행결과 배열을 리턴해 준다.
    */}
    {MovieList.map(info => 
      <Movie name={info.name} image={info.image}/>  )}
     
      {/*각각의 리스트안의 차일드는 유니크한 키 프로퍼티
      가 필요하다는 에러가 발생 
      모든 리액트의 요소는 유일해야하지만,
      리스트에 집어넣으면 유일해지지 않는다?*/}
    {/*
      {console.log(MovieList.map(renderMovie))}
      {MovieList.map(renderMovie)}
     */}
    </div>
  );
}

export default App;
/*
APP이라는 컴포넌트는
그안에 작성된 HTML을 반환한다.
*/


/* from 영일님
 HTML도 DOM구조로 바뀌면서 트리구조를 만듭니다.
지금은 형제 노드들이 h1,h2,h3있잖아요
부모를 만들어서 표시하라는 말은
div라는 부모태그를 만들고 그안에 자식으로 h1,h2,h3
return 기다리고있는 대상은 div이니까 한번에 랜더가되는겁니다

한마디로 부모노드 없이 형제노드만 3개를 만든 꼴이였음.

*/