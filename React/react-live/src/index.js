import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import Jsx from './jsx/Jsx';
// import PropsDemo from './props/PropsDemo';
// import Counter from "./states/Counter";
// import ConditionalRenderer from './conditionalRenderer/ConditionalRenderer';
// import FragementsDemo from './fragementsDemo/FragementsDemo';
import ListAndKeys from './listAndKeys/ListAndKeys';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComponent /> */}
    {/* <FunctionalComponent /> */}
    {/* <Jsx /> */}
    {/* <PropsDemo /> */}
    {/* <Counter /> */}
    {/* <ConditionalRenderer /> */}
    {/* <FragementsDemo /> */}
    <ListAndKeys />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
