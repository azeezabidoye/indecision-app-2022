import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp';
import './css/style.scss';
import 'normalize.css/normalize.css';

const Layout = (props) => {
    return(<div>
        <h1>Header</h1>

        {props.children}
        <p>Footer</p>
    </div>)
}
 
// ReactDOM.render(
// <Layout>
//     <div>
//         <h3>Body content</h3>
//         <p>This is a prop</p>
//     </div>
// </Layout>, 
// document.getElementById('app')
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))