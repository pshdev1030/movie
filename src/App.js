import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import "./App.css"

class App extends React.Component{

  state={
    isLoading:true,
    movies:[]
  };
  getMovies=async ()=>{
    const {
      data:{
        data:{ movies }
        /*state의 movies값을  */
      }
    }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false});
    /*가져와서 movies에 새 객체를 할당한다.*/
  }
  /*비동기, 기다려달라 */

  componentDidMount(){
   this.getMovies();
   /*axios로부터 온 데이터 잡는법 */
  }

  render(){
    const{movies, isLoading}=this.state;
    return(
      <section className="container">
       {isLoading ? (
          <div className ="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
        <div className="movies">
        {movies.map(movie=>(
        <Movie
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          genres={movie.genres}
         />
        )
        )}
        </div>
        )}
    </section>
    )
  }

}

export default App;

/*mounting
  constructor() ->render()->componentDidMount() */

/*unmount
componentWilUnmount() //지금은 삭제됨
*/

/*render
componentDidMount()->useEffect와 비슷하다. */

/* 상태값을 줄때 callback function으로 나타내기위해 괄호를 없앰. */

/*update
render() ->componentDidUpdate() */

/*state는 변하는 데이터 클래스 컴포넌트의 장점 허나 useStatehook으로 인해 의미없어짐 
또한 state는 태생이 객체이므로 setState또한 랜더링을 위해 새 객체를 만들어 전달
state는 미래를 위해 계획한 것이다. 없었던 값을 추가해도 문제가 없다.*/
  
/*this.state로 접근한다. 메서드에서 this는 클래스를 의미*/
  
/*current를 통해 현재의 state를 가져올 수 있다. 외부의 상태에 의존하지 않는 방법+ 비동기*/

/*axios fetch위에 있는 작은 레이어이다. 
npm install axios가 필요하다. 해당된 url로 부터 데이터를 가져온다.
yts를 사용 */