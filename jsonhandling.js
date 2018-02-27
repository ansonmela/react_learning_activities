var response = null;
var followers = null;


// zone in on document, on specific button id, and add event listener
// to listen for click, and then execute function getUser
document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
// for input of getUser, zone in on id input, which is the button's profile input and grab the first value
// which is only value
	getUser(document.getElementsByTagName('input')[0].value);
});

// gets user by fetching github for specific user info
function getUser(name) {
	// makes the GET request to github 
	fetch('https://api.github.com/users/' + name)

	// the above data gets passed into the bottom then promise as r
	.then(function(r) {

		// r gets rendered in json and returned to then be passed into promise below as j
		return r.json();
	})
	.then(function(j) {
		// promise response = j
		response = j
		// calls assignValues method below to assign each json property to the respective div id and places it in the page
		assignValues();
		getFollowers(j.followers_url);
	})
};

function assignValues() {
	// zone in on element by id, and zone in specific id property to add
	// assign response from above promise to specific json property 
	document.getElementById('avatar').src = response.avatar_url;
	document.getElementById('name').innerText = response.name;
	document.getElementById('username').innerText = response.login;
	document.getElementById('location').innerText = response.location;
	document.getElementById('bio').innerText = response.bio;
	document.getElementById('count').innerText = 'Followers: ' + response.followers;
};

// gets followers of inputted username, and returns as json. 
// 
function getFollowers(url) {
	fetch(url)
		.then(function(r) {
			return r.json();
	})
		.then(function(f){
			followers = f;
			console.log(f)
			listFollowers();
		});
	// inserts it into DOM
function listFollowers() {
	followers.forEach(function(f) {
		var li = document.createElement('li');
		li.innerHTML = '<a href="' + f.html_url + '">'
		+ '<img src="' + f.avatar_url + '" alt="' + f.login + '"/>'
		+ '</a>';
		document.getElementById('list').appendChild(li);
	});
}

}