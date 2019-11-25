import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {

  render() {
    const mystyle = { 
  border : "thin  dotted ",
  backgroundColor:"cyan"

};
    return (
    
    <React.Fragment>
    <h1> Employee Details</h1>
    <table style={mystyle} border="1" >
    <tr>
    <th>emp id</th>
    <th>emp name</th>
    <th>emp email</th>
    </tr>
    <tr>
    <td>1</td>
    <td>amit</td>
    <td>amit@m.com</td>
    </tr>
    <tr>
    <td>1</td>
    <td>amit</td>
    <td>amit@m.com</td>
    </tr>
    <tr>
    <td>1</td>
    <td>amit</td>
    <td>amit@m.com</td>
    </tr>
    </table>
    </React.Fragment>
        
    );
  }
}

render(<App name="afdsf" />,
document.getElementById('root'));

//render(<App />, document.getElementById('root'));
