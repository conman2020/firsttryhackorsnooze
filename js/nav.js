"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  
}
$body.on("click", "#nav-all", navAllStories);

function navSubmitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $submissionForm.show();
  $allStoriesList.show();
}
$submitStory.on("click", navSubmitStoryClick);

function navFavoritesClick(evt) {
  console.debug("my Favorites Click", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}
$body.on("click", "#my-favorites", navFavoritesClick);

/** Show login/signup on click on "login" */
function navMyStories(evt) {
  console.debug("My Stories", evt);
  hidePageComponents();
  putUserStoriesOnPage();

}
$body.on("click", "#nav-my-stories", navMyStories);


function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$loginUser.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */
function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show();
}

$userProfile.on("click", navProfileClick);

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-user-links").show();
  $loginForm.hide();
  $loginUser.hide();
  $logOut.show();
  $userProfile.text(`${currentUser.username}`).show();
}

function navigateToProfile(){
  console.debug('update-profile');
  hidePageComponents();
  $Profile.show();


}