import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render() {
    return (<div className={styles.wrapper}>
              <h1> 
                Text <i className="fa fa-star"></i>
              </h1> 
            </div>);
  }
}


module.exports = App;
