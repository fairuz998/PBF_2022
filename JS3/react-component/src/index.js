import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
import List from './component/List';
import Test from './component/Test';
import Login from './login/Login';

// Default
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App/>, document.getElementById('root'));

// Pertemuan 3
// Stateless Component
// function HelloWord ()
// {
//   return <p>Ini adalah function component</p>
// }
// ReactDOM.render(<HelloWord/>, document.getElementById('root'));

// Stateless Component (Arrow Function)
// const HelloWord = () =>{
//   return <p>ini adalah arrow function</p>
// }
// ReactDOM.render(<HelloWord/>, document.getElementById('root'));

// StateFull Component
// HelloComponent
// class Statefullcomponent extends React.Component
// {
//   render(){
//     return <p>ini adalah Statefull Component</p>
//   }
// }
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

// ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));

// ReactDOM.render(<List/>, document.getElementById('root'))

// ReactDOM.render(<Test/>, document.getElementById('root'))

// Tugas Pertemuan 3
ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
