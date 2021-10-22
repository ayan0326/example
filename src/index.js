// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import ExamplePage from './component/example/ExamplePage';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <ExamplePage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter } from 'react-router-dom';
import Router from './Router';
import RootContainer from './RootContainer';
import 'antd/dist/antd.css';


const Root = withRouter(RootContainer);

ReactDOM.render(
    <BrowserRouter basename="/">
        <Root>
        <Router/>
    </Root>
    </BrowserRouter>,
    document.getElementById('root')
);