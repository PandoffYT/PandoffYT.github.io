// this might be deprecated idk find out yourself atp
function easteregg() {
    window.location.href = './app/storage/ressources/todolist';
}


document.addEventListener('DOMContentLoaded', (event) => {
// CONSTS, SCRIPTS STARTUPS
//const originalTitle = document.querySelector('title').innerHTML;
const bannerAudio = new Audio('/app/storage/ressources/sounds/stoneslide.mp3');
//const blockedPaths = [
    //'/app/storage/ressources/todolist.txt',
    //'/another/path/to/block.html',
    //'/yet/another/path.html'
//];

// Prevents the user from right clicking    
    // Red banner that appears when right click
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '-50px';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = 'red';
    banner.style.color = 'white';
    banner.style.textAlign = 'center';
    banner.style.padding = '10px';
    banner.style.fontFamily = 'cursive';
    banner.style.transition = 'top 3s';
    banner.innerHTML = "❌ i'm just letting you know that right click isnt a thing at " + window.location.href +" 🤗"; ;
    document.body.appendChild(banner);


   document.addEventListener('contextmenu', event => {
        event.preventDefault();
        //document.title = "No right click";
        bannerAudio.play();
        banner.style.top = '0';
        setTimeout(() => {
            //document.title = originalTitle;
            bannerAudio.play();
            banner.style.top = '-50px'; 
        }, 3700); 
    });
});

// Other way of preventing right click (deprecated)
//function blockRightClick() {
    //document.addEventListener('contextmenu', event => {
        //event.preventDefault();
    //});
//}

//if (blockedPaths.some(path => window.location.pathname.endsWith(path))) {
    //banner.style.top = '-50000px';
    //blockRightClick();
//}