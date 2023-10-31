
/** 
 * 
 *             
 * 
 * 
 * **/


// git repo button top head
const githubButton = document.querySelector("#open-github");

githubButton.addEventListener("click", () => {
    window.open("https://github.com/wowrakibul02/", "_self");
});


// nav right - social icon hover - facebook

const socialFollowFacebook = document.querySelector('.follow-facebook');
const socialiconFacebook = socialFollowFacebook.getAttribute('src');
const hoverSocialFacebook = socialFollowFacebook.getAttribute('data-src');

socialFollowFacebook.addEventListener('mouseover', () => {
    socialFollowFacebook.src = hoverSocialFacebook;
});

socialFollowFacebook.addEventListener('mouseout', () => {
    socialFollowFacebook.src = socialiconFacebook;
});

socialFollowFacebook.addEventListener("click", () => {
    window.open("https://facebook.com/wowrakibul/", "_self");
});


// nav right - social icon hover - discord

const socialFollowDiscord = document.querySelector('.follow-discord');
const socialiconDiscord = socialFollowDiscord.getAttribute('src');
const hoverSocialDiscord = socialFollowDiscord.getAttribute('data-src');

socialFollowDiscord.addEventListener('mouseover', () => {
    socialFollowDiscord.src = hoverSocialDiscord;
});

socialFollowDiscord.addEventListener('mouseout', () => {
    socialFollowDiscord.src = socialiconDiscord;
});

socialFollowDiscord.addEventListener("click", () => {
    window.open("https://discord.gg/aXfd8Uwu83", "_self");
});


// nav right - social icon hover - behance

const socialFollowBehance = document.querySelector('.follow-behance');
const socialiconBehance = socialFollowBehance.getAttribute('src');
const hoverSocialBehance = socialFollowBehance.getAttribute('data-src');

socialFollowBehance.addEventListener('mouseover', () => {
    socialFollowBehance.src = hoverSocialBehance;
});

socialFollowBehance.addEventListener('mouseout', () => {
    socialFollowBehance.src = socialiconBehance;
});

socialFollowBehance.addEventListener("click", () => {
    window.open("https://behance.com/wowrakibul/02", "_self");
});



// nav right - social icon hover - dribbble

const socialFollowDribbble = document.querySelector('.follow-dribbble');
const socialiconDribbble = socialFollowDribbble.getAttribute('src');
const hoverSocialDribbble = socialFollowDribbble.getAttribute('data-src');

socialFollowDribbble.addEventListener('mouseover', () => {
    socialFollowDribbble.src = hoverSocialDribbble;
});

socialFollowDribbble.addEventListener('mouseout', () => {
    socialFollowDribbble.src = socialiconDribbble;
});

socialFollowDribbble.addEventListener("click", () => {
    window.open("https://dribbble.com/wowrakibul02/", "_self");
});



// nav right - social icon hover - youtube

const socialFollowYoutube = document.querySelector('.follow-youtube');
const socialiconYoutube = socialFollowYoutube.getAttribute('src');
const hoverSocialYoutube = socialFollowYoutube.getAttribute('data-src');

socialFollowYoutube.addEventListener('mouseover', () => {
    socialFollowYoutube.src = hoverSocialYoutube;
});

socialFollowYoutube.addEventListener('mouseout', () => {
    socialFollowYoutube.src = socialiconYoutube;
});

socialFollowYoutube.addEventListener("click", () => {
    window.open("https://youtube.com/@20mindesigns/", "_self");
});

