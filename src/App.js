import React from "react";
import axios from "axios";
import Movie from "./movie"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { 
      data :{  
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies.data.data.movies);
    console.log(movies);
    this.setState({movies, isLoading: false})
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie =>{
      console.log(movie);
      return <Movie 
      id={movie.id} 
      year={movie.year}
      title={movie.title} 
      summary={movie.summary} 
      poster={movie.medium_cover_image}/>
    })}</div>;
  }
}

export default App;


/*
function Movie( {name,image,rating} ){  
  return( <div>
            <h1> { name }</h1>
            <h4>{rating}/5.0</h4>
            <img src = {image} alt={name} />
          </div>
  );
}



/* 아래에서 movie에 props들을 전달하게 된다.
 movie 함수의 아규먼트로 모두 가져온다.*/
 
 /*동적데이터 가져오기
 API에서 무비리스트에 데이터를 가져왔다고 가정 */

 /* props를 전달하면서 올바르게 전달되었는지
 props 타입을 확인한다. 

 Movie.propTypes = {
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
}
/*2-4강 기준 prop타입 검사에서 rating은 float으로 주어졌는데
검사를 string으로 해서 동작은 이상이 없지만 웹 콘솔을 보면 
워닝이 뜬다. 기대한 prop의 타입이 맞지 않는다고 
const MovieList = [
    {
      id: 1,
      name : "FF9",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=yG1lVvQa&id=27B044CA6E5D1A817EAB77404977940A31F5B3BB&thid=OIP.yG1lVvQaFZyJHI4s5ENrLQHaD4&mediaurl=https%3a%2f%2fup-template.azureedge.net%2f_FileData%2fM0302%2f202003%2f17%2ff715b27081aa07208ec742492fb359ab.jpg&exph=630&expw=1200&q=%eb%b6%84%eb%85%b8%ec%9d%98+%ec%a7%88%ec%a3%bc+%ec%96%bc%ed%8b%b0%eb%a9%94%ec%9d%b4%ed%8a%b8&simid=607991159604316224&ck=D94B68A01A76554FF8612C2291204FE1&selectedIndex=0&FORM=IRPRST",
      rating : 5
    },
    {
      id: 2,
      name : "크루엘라",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=Y%2bcGCAB9&id=D3C86F3D6EABE813B38DEBF95428050D7906E791&thid=OIF.9fQHEiIv9SQ7BKuPxLBv7w&mediaurl=https%3a%2f%2fpds.joins.com%2fnews%2fcomponent%2fhtmlphoto_mmdata%2f202105%2f27%2ffa9ad18b-11ad-420b-8e55-7de2dc3ccc1f.jpg&exph=798&expw=560&q=%ed%81%ac%eb%a3%a8%ec%97%98%eb%9d%bc&simid=219166805694&ck=F5F40712222FF5243B04AB8FC4B06FEF&selectedIndex=0&FORM=IRPRST",
      rating : 4.9
    },
    {
      id: 3,
      name : "the spy",
      image : "https://www.bing.com/images/search?view=detailV2&ccid=rarXk4Vl&id=0220EEC484E23B76250EF74000524458D00E0D25&thid=OIF.5Z3aEHYa095rHqLJoVAHAw&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fK7roTitsmiw%2fmaxresdefault.jpg&exph=720&expw=1280&q=%eb%8d%94+%ec%8a%a4%ed%8c%8c%ec%9d%b4&simid=81726944725&ck=E59DDA10761AD3DE6B1EA2C9A1500703&selectedIndex=1&FORM=IRPRST",
      rating : 4.8
    }
]

function renderMovie(info){
  
  return <Movie name ={info.name} picture = {info.image}/>
}

function App() {
  return ( <div className="App">

    /*자식 컴포넌트에 데이터 전달하기
    <Movie 
    name = "FF9"
    day = "5월 29일"
    actors = {['vin', 'john']}/> 
    무비 컴포넌트에 FF9이라는 value로 prop name을 주었다
    그 외에도 prop은 다수 보내줄 수 있다.*/ 

    /*자바스크립트의 map을 이용하기
    map은 배열의 각 item을 입력으로 해서 함수를 실행
    그 실행결과 배열을 리턴해 준다.
    */
    /*{MovieList.map(info => 
      <Movie 
      key = {info.id} 
      name={info.name} 
      image={info.image}
      rating={info.rating}/>  )}
     
      {/*각각의 리스트안의 차일드는 유니크한 키 프로퍼티
      가 필요하다는 에러가 발생 
      모든 리액트의 요소는 유일해야하지만,
      리스트에 집어넣으면 유일해지지 않는다?
      다른 이름, 사진등을 보유해도 리스트내의 아이템들의
      고유성을 리액트가 식별하지 못하는 에러
      키 prop을 입력하는 것으로 해결
      그러나 movie로 전달되지는 않고, 리액트가 자체적으로 사용
 
      from 영일님.
      이름도 가능하긴하지만 숫자가 더 좋죠 아무래도
      보통 그런경우 map()이라는 함수를 많이 사용하게되는데
      어떠한 데이터가 모여있는 리스트가 있으면
      그 인덱스를 구별하기 위한 키값으로 사용하면 됩니다.
      그리고 키값도  컴포넌트에 전달하기 때문에
      다른 props처럼 활용해서 쓸수있어요
      아마 퀴즐렛 만들때 랜덤한 문제를 만들려면 
      그 키값을 사용해야하는 상황도 나올거같네여

      정리 : 키값을 다른 prop을 활용할 수 있지만
      index정리를 위해서 숫자를 사용한다
      
    /*
      {console.log(MovieList.map(renderMovie))}
      {MovieList.map(renderMovie)}
     
    </div>
  );
}
*/
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