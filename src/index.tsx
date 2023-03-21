import React from "react";
import * as ReactDOM from 'react-dom';
import * as ReactDOMcli from 'react-dom/client';



function hl() {
  console.log('estou funcionando')
    return (
        <h1>Hello Word</h1>
    )
}


class App extends React.Component {
    render() {
      return (
        <div>
          {hl()}
        </div>
      );
    }
  }

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOMcli.createRoot(domContainer);
ReactDOM.render(<App />, domContainer);
