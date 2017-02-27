import React, {Component} from 'react'
import UsersContainer from './UsersContainer'

class AllUsers extends Component {

   constructor(props) {
	super(props);
	let users = [{first_name: "teste"}];

	this.state = { users };
   }

   componentWillUnmount() {

   }
   componentDidMount() {
	new UsersContainer().getAllUser()
		.then((data)=>{
		   this.setState({users: data});
		});
   }

   render() {
	return (
	<div>
	{this.state.users.map((user, index)=>(
		<p>user.first_name</p>
	))}
	</div>
	);
   }
}

export default AllUsers;
