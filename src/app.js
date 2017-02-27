import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import styles from './styles.module.css'

class App extends Component {
  render() {
    return (<div className={styles.wrapper}>
              Text text text 
            </div>);
  }
}

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);

// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = React.createClass({
//   render: function() {
//     return (<div>Text text text</div>)
//   }
// });

// const mountNode = document.querySelector('#root');
// ReactDOM.render(<App />, mountNode);
