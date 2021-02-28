import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({year,title,summary,poster,genres}){
    return( 
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index)=> (
                <li key={index} className="genres__genre">{genre}</li>
            ))}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    );
    
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}
/* 변수의 타입을 정해놓고 컴포넌트에서 명시적으로 받는다. */
/*img의 title은 마우스 올렸을시 나옴 */
/*slice를 통해 배열을 자르고 ...을 추가해 컨테이너의 높이를 동일하게 만들었따.*/
/*map은 item과 item number를 기본적으로 제공한다. 이를 파라매터로 받아서 key로 쓸 수 있따. */
export default Movie;