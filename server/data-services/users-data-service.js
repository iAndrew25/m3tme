module.exports = {
	getUserData: function (username) {
		if(!username){
			return {
			id: "1",
			username: "userData",
		};
		}
	   return {
			id: "1",
			username: username
		};
	}
};