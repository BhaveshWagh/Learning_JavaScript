// Old Way 
const requestUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    console.log(data.followers);
    const userCard = document.getElementById("userCard");
    const avatar = document.getElementById("avatar");
    const username = document.getElementById("username");
    const bio = document.getElementById("bio");
    const followers = document.getElementById("followers");
    const repos = document.getElementById("repos");

    avatar.src = data.avatar_url;
    username.textContent = data.login;
    bio.textContent = data.bio ? data.bio : "No bio available";
    followers.textContent = `Followers: ${data.followers}`;
    repos.textContent = `Public Repositories: ${data.public_repos}`;
  }
};
xhr.send();

const userCard = document.getElementById("userCard");
const avatar = document.getElementById("avatar");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const repos = document.getElementById("repos");

avatar.src = data.avatar_url;
username.textContent = data.login;
bio.textContent = data.bio ? data.bio : "No bio available";
followers.textContent = `Followers: ${data.followers}`;
repos.textContent = `Public Repositories: ${data.public_repos}`;



// Modern Way using Fetch 
// const apiUrl = 'https://api.github.com/users/hiteshchoudhary';

// async function fetchData() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     const userCard = document.getElementById('userCard');
//     const avatar = document.getElementById('avatar');
//     const username = document.getElementById('username');
//     const bio = document.getElementById('bio');
//     const followers = document.getElementById('followers');
//     const repos = document.getElementById('repos');

//     avatar.src = data.avatar_url;

//     username.textContent = data.login;

//     bio.textContent = data.bio ? data.bio : 'No bio available';

//     followers.textContent = `Followers: ${data.followers}`;

//     repos.textContent = `Public Repositories: ${data.public_repos}`;

//   }
//    catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchData();
