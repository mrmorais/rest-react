import React, {Component} from 'react'
import AllUsers from './AllUsers'

export default class App extends Component {
   render() {
	return (
	   <div>
	      <h3>Bem vindo à gerencia de usuários</h3>
	      <AllUsers/>
	   </div>
	);
   }
}
