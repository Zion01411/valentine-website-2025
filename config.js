// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Anne",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Ganahan ka sako?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "Psstt diri ang sakto na tubag hehe❤️"
        },
        second: {
            text: "How much do you love me or lab bako nimo?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "GRABI BAH INGANA GUD DIAY WOWOWWOW?? 🥰🚀💝",
        high: "Gi pataasan pa unta pero ohkiii! 🚀💝",
        normal: "ohkiiii 🥰"
    },

    celebration: {
        title: "eyyyy gi tangap ko HAHAHAHAH! 🎉💝💖💝💓",
        message: "I love you sewww muchh hehe",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // 🌸 BACKGROUND WITH IMAGE (READY)
    colors: {
        backgroundImage: "https://causal-sapphire-s1kr5yt1fa.edgeone.app/134141776542391615_1452_817_1769730981701.jpg",

        backgroundStart: "rgba(255, 175, 189, 0.75)",
        backgroundEnd: "rgba(255, 195, 160, 0.75)",

        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;

// 🌷 APPLY BACKGROUND IMAGE SAFELY (NO FUNCTION CHANGES)
document.body.style.backgroundImage = `
    linear-gradient(
        to bottom right,
        ${CONFIG.colors.backgroundStart},
        ${CONFIG.colors.backgroundEnd}
    ),
    url(${CONFIG.colors.backgroundImage})
`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
