document.addEventListener('DOMContentLoaded', (event) => {
    // CONSTS, SCRIPTS STARTUPS
    const bannerAudio = new Audio('/app/storage/ressources/sounds/stoneslide.mp3');

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
    banner.innerHTML = "❌ i'm just letting you know that right click isnt a thing at " + window.location.href + " 🤗";
    document.body.appendChild(banner);

    document.addEventListener('contextmenu', event => {
        event.preventDefault();
        bannerAudio.play();
        banner.style.top = '0';
        setTimeout(() => {
            banner.style.top = '-50px';
        }, 3700);
    });

    const titles = [
        "j'ai des voisins enzo",
        "j'ai des voisins enzole view is broken",
        "j'ai des voisins enzo why is it loading forever",
        "j'ai des voisins enzoe (no inspiration)",
        "j'ai des voisins enzo enjoy ig",
        "j'ai des voisins enzo 2ah",
        "j'ai des voisins enzoare u watching",
        "j'ai des voisins enzofor real",
        "j'ai des voisins enzo okay",
        "j'ai des voisins enzoyou not like watch me",
        "j'ai des voisins enzose vro",
        "j'ai des voisins enzoyou not :rage:",
        "j'ai des voisins enzoSEEE",
        "j'ai des voisins enzo",
        "j'ai des voisins enzoes*",
    ];

    let titleIndex = 0;

    function alternateTitle() {
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setInterval(alternateTitle, 0);
});