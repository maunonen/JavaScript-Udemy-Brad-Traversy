// init GitHub
const github = new GitHub; 
// init UI
const ui = new UI; 

/* Search Button  */
const searchButton = document.getElementById("searchButton"); 
const searchUser = document.getElementById("searchUser"); 

/* Search buuton event listener */

searchButton.addEventListener("click", (e) => {
  const userText = searchUser.value;  
  if (userText !== ''){
     // Make http call
     github.getUser(userText)
      .then(data => {
        console.log(data.profile)
        if (data.profile.message === 'Not Found') {
          // Show alert 
          ui.showAlert('User not found', 'alert alert-danger'); 
          ui.clearProfile(); 
        } else {
          // show profile
          ui.showProfile(data.profile); 
          ui.showRepos(data.repos); 
        }
      })
  } else {
    // clear profile 
    ui.clearProfile(); 
    console.log()
  }
});