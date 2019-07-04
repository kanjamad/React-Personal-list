import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// const Person = props => {
//     console.log(props)

const Person = ({img, name, job, children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <article>
            <img src={url}  alt="person" />
            <h4> {name} </h4>
            <h4> {job} </h4>
        </article>
    )
}



const PersonList = () =>{
    return (
        <section>
            <Person  img="34" name="john" job=" developer" />
            <Person  img="3" name="bob" job=" designer" />
            <Person  img="62" name="david" job=" the boss" />
        </section>
    )
}

ReactDOM.render(<PersonList />, document.getElementById('root'));

