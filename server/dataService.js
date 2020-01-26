module.exports = {
  	getProfile: function () {
	   return {
			id: "1",
			username: "cami",
			fullName: "cami",
			location: "iasi",
			avatar: "url://",
			followersCount: 1,
			followingCount: 1,
			postsCount: 1,
			likesCount: 1
		};
	},

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