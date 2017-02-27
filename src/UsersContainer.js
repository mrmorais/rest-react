import Request from 'request'

export default class UsersContainer {
   getAllUsers() {
	return new Promise((resolve, reject)=>{
	   Request("http://localhost:3001/user", (err, res, body)=>{
		resolve(JSON.parse(body));
	   });
	});
   }

   getUserById(id) {
	console.log(id);
   }
}
