document.addEventListener('DOMContentLoaded', (event) => {
    // CONSTS, SCRIPTS STARTUPS
    const bannerAudio = new Audio('/app/storage/ressources/sounds/stoneslide.mp3');

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
        "théo",
        "mobile view is broken",
        "also why is it loading forever",
        "title (no inspiration)",
        "uhhh enjoy ig",
        "hawk 2ah",
        "why are u watching",
        "nah for real",
        "uhhh okay",
        "can you not like watch me",
        "please vro",
        "can you not :rage:",
        "PLEASEEE",
        "bet.",
        "*nukes*",
    ];

    let titleIndex = 0;

    function alternateTitle() {
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }

    setInterval(alternateTitle, 3000);
});