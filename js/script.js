// === DATABASE MUSIK ===
const musicData = {
    japanese: {
        title: 'Japanese music based',
        artists: ['TUYU', 'natori', 'YOAKE', 'Yorushika', 'Aimer', 'DAZBEE', 'takayan', 'Ado', 'Toiki', 'jon-YAKITORY', 'yama', 'Yuika', 'Mel', 'YOASOBI', 'Eve', 'x0o0x_', 'INABAKUMORI', 'Azari', 'Tatsuya Kitani', 'Kanaria', 'haruno', 'Yoh Kamiyama', 'Gen Hoshino', 'Vaundy', 'Mrs. GREEN APPLE', 'POLKADOT STRINGRAY', 'もさを', 'Sui', '和ぬか', 'Lilas', 'Minty', 'Rokudenashi', 'Michael Kaneko', 'DURDN', 'TOOBOE', 'Dannie May', 'BIN', 'sasanomaly', 'Maigo Hanyuu', 'Sano Ibuki', 'HIRAIDAI', 'Helsinki Lambda Club', 'Cody Lee', 'Lucie', 'Kroi', '4na', 'Fujii Kaze', 'imase', 'emoinotake']
    },
    korean: {
        title: 'Korean music based',
        artists: ['NewJeans', 'HOSHI', 'SEVENTEEN', 'BSS', 'NJZ', 'BOYNEXTDOOR', 'TOMORROW X TOGETHER', 'Red Velvet', 'dreamcatcher', 'IVE', 'GFRIEND', 'fromis_9', 'aespa', 'EXO', 'NMIXX', 'TWS', 'ENHYPEN', '&TEAM', 'KATSEYE', 'LE SSERAFIM', 'ILLIT', 'IU', 'ZICO', 'Girls’ Generation', 'GOT the beat', 'NCT 127', 'NCT U', 'NCT DREAM', 'WayV', 'NCT 2020', 'NCT DOJAEJUNG', 'RIIZE', 'BIGBANG', '2NE1', 'BLACKPINK', 'iKON', 'AKMU', 'WINNER', 'BABYMONSTER', 'TREASURE', 'XG', 'ZEROBASEONE', 'ITZY', 'MAMAMOO', 'GOT7', 'weeekly', 'WOOAH', 'IZ*ONE', 'LOONA', 'TWICE', 'EVERGLOW', '(g)i-dle', 'MOMOLAND', 'YooA', 'PURPLE KISS', 'BOL4', 'BIBI', 'LIGHTSUM', 'WOODZ', 'P1Harmony', 'Kep1er', 'Stray Kids', 'STAYC', 'Billlie', 'Wanna One', 'MCND', 'tripleS', 'VIVIZ', 'Weki Meki', 'CLC', 'xikers', 'KISS OF LIFE', 'Xdinary Heroes', 'QWER', 'ARTMS', 'MEOVV', 'izna', 'KiiiKiii', 'Hearts2Hearts', 'Yves']
    },
    altPop: { title: 'Alternative Pop', artists: ['Tally Hall', 'Cigarettes After Sex'] },
    instrumentalProg: { title: 'Instrumental Prog', artists: ['Polyphia', 'Ichika Nito', 'Syncatto', 'Thrailkill', 'Catbamboo', 'Plini', 'Nyu.', 'Moray Pringle', 'The Surrealist', 'Berried Alive', 'Good Tiger', 'TesseracT', 'Wheel', 'Rishloo'] },
    blues: { title: 'Blues', artists: ['J.J. Cale', 'Marc Broussard', 'Alabama', 'T-Bone Walker', 'Bill Withers'] },
    progRock: { title: 'Progressive Rock', artists: ['Porcupine Tree', 'Pink Floyd'] },
    arenaRock: { title: 'Arena Rock', artists: ['Poison', 'Dire Straits', 'Bad Company', '10cc', 'Alice Cooper', 'Accept', 'AC/DC', 'Bon Jovi', 'Deep Purple', 'Gary Moore', 'Guns N’ Roses', 'KISS', 'Van Halen', 'TOTO', 'Foreigner'] },
    postGrunge: { title: 'Post-Grunge', artists: ['The Offspring', 'Foo Fighters', 'The White Stripes', 'Royal Blood'] },
    nuMetal: { title: 'Nu Metal', artists: ['Linkin Park', 'Avenged Sevenfold', 'Korn', 'Skillet', 'Killswitch Engage', 'In Flames', 'Evanescence'] },
    heavyMetal: { title: 'Heavy Metal', artists: ['Ozzy Osbourne', 'Black Sabbath', 'Iron Maiden', 'Judas Priest', 'Metallica'] },
    indonesianIndie: { title: 'Indonesian Indie', artists: ['Skinnyfabs', 'Arash Buana', 'GANGGA', 'raissa anggiani', 'Ardhito Pramono', 'TheOvertunes', 'Pamungkas'] },
    rnb: { title: 'R&B', artists: ['brb.', 'Crush', 'GIVĒON', 'HONNE', 'Daniel Caesar', 'Steve Lacy', 'Alicia Keys', 'Usher', 'The Weeknd'] },
    altIndie: { title: 'Alternative/Indie', artists: ['Her’s', 'Cavetown', 'Gentle Bones', 'grentperez', 'suggi', 'Bruno Major', 'Luke Chiang', 'keshi', 'New West', 'Clairo', 'Ricky Montgomery', 'sombr', 'Gigi Perez', 'The Marias', 'd4vd', 'Finding Hope', 'Rex Orange County', 'Ruel', 'Conan Gray', 'Beach Bunny', 'Cafuné', 'Ashe', 'TV Girl', 'beabadoobee', 'Mitski'] },
    mainstreamPop: { title: 'Mainstream Pop', artists: ['James Arthur', 'Shawn Mendes', 'One Direction', 'The Vamps', 'Adele', 'Ed Sheeran', 'Dhruv', 'Jeremy Zucker', 'Lauv', 'Dan + Shay', 'Bazzi', 'Ali Gatie', 'Troye Sivan', 'NIKI', 'JP Saxe', 'Lewis Capaldi', 'Calum Scott', 'Lukas Graham', 'Ariana Grande', 'Justin Bieber', 'ZAYN', 'Meghan Trainor'] },
    indieRock: { title: 'Indie Rock', artists: ['Radiohead'] },
    kjwRnb: {
        title: 'K/J/I/W-R&B songs',
        type: 'construction',
        message: '</under construction 🚧> <br> please wait patiently.',
        buttonText: 'do not click',
        buttonUrl: 'https://youtu.be/fC7oUOUEEi4'
    },
    indieMore: {
        title: 'Indonesian EVEN MORE indie',
        type: 'construction',
        message: '</under construction 🚧> <br> please wait patiently.',
        buttonText: 'do not click',
        buttonUrl: 'https://youtu.be/dQw4w9WgXcQ'
    },
    otherIndo: {
        title: 'other Indonesian music based',
        type: 'construction',
        message: '</under construction 🚧> <br> please wait patiently.',
        buttonText: 'do not click',
        buttonUrl: 'https://youtu.be/B5SL9yrMPn8'
    },
    randomMusic: {
        title: 'random music',
        type: 'construction',
        message: '</under construction 🚧> <br> please wait patiently.',
        buttonText: 'do not click',
        buttonUrl: 'https://hiurono.netlify.app/other/bug.html'
    }
};

// === DATABASE GAME ===
const gameData = {
    roblox: {
        title: "Roblox Games",
        download: {
            name: "Download Roblox",
            links: {
                playstore: "https://play.google.com/store/apps/details?id=com.roblox.client",
                appstore: "https://apps.apple.com/us/app/roblox/id431946152"
            }
        },
        games: [
            { name: "evade", desc: "Gim horor bertahan hidup di mana pemain harus berlari dan bersembunyi dari monster." },
            { name: "twenty one", desc: "Gim kartu klasik Blackjack (21) dengan sentuhan sosial." },
            { name: "hitman card game", desc: "Gim strategi kartu di mana Anda harus mengeliminasi target." },
            { name: "buckshot mayhem", desc: "Gim menegangkan yang terinspirasi dari 'Buckshot Roulette'." },
            { name: "sno day", desc: "Gim santai di mana Anda bisa bermain salju dan bersosialisasi." },
            { name: "skated", desc: "Gim skateboard dengan banyak trik dan lokasi untuk dijelajahi." },
            { name: "go skate", desc: "Gim skateboard santai dengan fokus pada eksplorasi." },
            { name: "skated dawn", desc: "Versi lain dari gim skateboard dengan suasana yang berbeda." },
            { name: "skate obby", desc: "Parkour (Obby) menggunakan papan skateboard." },
            { name: "99 nights in the forest", desc: "Gim petualangan bertahan hidup di hutan." },
            { name: "together", desc: "Gim co-op di mana pemain harus bekerja sama untuk menyelesaikan puzzle." },
            { name: "back to school", desc: "Roleplay di lingkungan sekolah dengan berbagai aktivitas." },
            { name: "poison candy", desc: "Gim sosial deduksi, mirip dengan 'Among Us'." },
            { name: "defusal", desc: "Gim tim di mana satu tim memasang bom dan tim lain menjinakkannya." },
            { name: "ophelia", desc: "Jelajahi dunia fantasi yang indah dan penuh warna! Petualangan seru dengan visual yang imut, cocok banget untuk dimainkan bareng teman atau keluarga ☺️" }
        ],
        infoText: "Game gunung, & game lainnya (yang gampang gampang only)."
    },
    minecraft: {
        title: "Minecraft Editions",
        type: "direct_links", 
        links: [
            { name: "Java Edition", url: "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc", cssClass: "java" },
            { name: "Bedrock Edition", url: "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc", cssClass: "bedrock" },
            { name: "PlayStore", url: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", cssClass: "playstore" },
            { name: "AppStore", url: "https://apps.apple.com/us/app/minecraft/id479516143", cssClass: "appstore" }
        ]
    },
    hoyoverse: {
        title: "Hoyoverse Games",
        games: ["Genshin Impact", "Honkai: Star Rail", "Zenless Zone Zero"]
    },
    rhythm: { 
        title: "Rhythm Games", 
        games: ["Rhythm Hive"] 
    },
    simulator: { 
        title: "Simulator Games", 
        games: ["Township", "Hayday"] 
    },
    honorable: { 
        title: "Honorable Mentions", 
        games: ["Geometry Dash", "Cookierun: Kingdom", "Sky: Children of the Light", "Puzzle Seventeen", "Plato: Fun Multiplayer Games", "Undercover: Word Party Game"] 
    },
    random: { 
        title: "Random Games", 
        games: ["Block Blast", "Subway Surfers", "Ludo King", "Words of Wonders", "Magic Tiles", "Uno", "Temple Run", "Temple Run 2", "Among Us", "Fruit Merge", "Wordle", "Fruit Ninja", "Brain Test", "Goods Puzzle", "Cooking Madness", "Stumble Guys", "Tebak Gambar", "Helix Jump", "My Talking Tom", "Mahjong", "Cooking Mama", "Hill Climb Racing", "Harvest Town", "Ice Cream Truck", "My Hotpot Story", "Let Me Eat: Feeding Frenzy", "Ojol The Game"],
        infoText: "Beberapa PS4, PS5, sama PSP games."
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // === Mengambil Elemen DOM ===
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupBox = document.getElementById('popupBox');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    let currentUrl = '';

    // === FUNGSI-FUNGSI POPUP ===

    // -- POPUP MUSIK --
    const showMusicCategoryPopup = (categoryKey) => {
        const category = musicData[categoryKey];
        if (!category) return;
        popupTitle.textContent = category.title;
        let contentHTML = '';
        if (category.type === 'construction') {
            contentHTML = `<p class="popup-construction-text">${category.message}</p><a href="${category.buttonUrl}" target="_blank" rel="noopener noreferrer" class="popup-construction-button">${category.buttonText}</a>`;
        } else {
            contentHTML = category.artists.map(artistName => `<div class="artist-item" data-artist-name="${artistName}" data-category="${categoryKey}">${artistName}</div>`).join('');
        }
        popupContent.innerHTML = contentHTML;
        popupBox.className = 'popup-box music-category-view';
        popupOverlay.classList.add('show');
    };

    const showArtistDetailPopup = (artistName, categoryKey) => {
        popupTitle.textContent = artistName;
        const encodedArtistName = encodeURIComponent(artistName);
        const linksHTML = `<p>Jelajahi musik dari <strong>${artistName}</strong> di platform favorit Anda:</p><div class="popup-artist-links"><a href="https://open.spotify.com/search/$${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link spotify">Spotify</a><a href="https://music.apple.com/us/search?term=${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link apple">Apple Music</a><a href="https://www.youtube.com/results?search_query=${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link youtube">YouTube</a></div>`;
        const backButtonHTML = `<button class="popup-back-button" data-category="${categoryKey}">← Kembali</button>`;
        popupContent.innerHTML = linksHTML + backButtonHTML;
        popupBox.className = 'popup-box music-artist-view';
    };
    
    // -- POPUP GAME --
    const showGameCategoryPopup = (categoryKey) => {
        const category = gameData[categoryKey];
        if (!category) return;
        popupTitle.textContent = category.title;
        let contentHTML = '';
        if (category.type === 'direct_links') {
            contentHTML = `<div class="popup-game-links">${category.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="game-store-link ${link.cssClass}">${link.name}</a>`).join('')}</div>`;
        } else if (categoryKey === 'roblox') {
            contentHTML += `<div class="game-item" data-game-name="${category.download.name}" data-category="${categoryKey}">${category.download.name}</div>`;
            contentHTML += category.games.map(game => `<div class="game-item" data-game-name="${game.name}" data-category="${categoryKey}">${game.name}</div>`).join('');
        } else {
            contentHTML = category.games.map(gameName => `<div class="game-item" data-game-name="${gameName}" data-category="${categoryKey}">${gameName}</div>`).join('');
        }
        if (category.infoText) { contentHTML += `<p class="popup-info-text">${category.infoText}</p>`; }
        popupContent.innerHTML = contentHTML;
        popupBox.className = 'popup-box game-category-view';
        popupOverlay.classList.add('show');
    };

    const showGameDownloadPopup = (gameName, categoryKey) => {
        popupTitle.textContent = gameName;
        const encodedGameName = encodeURIComponent(gameName);
        let linksHTML = `<a href="https://play.google.com/store/search?q=${encodedGameName}&c=apps" target="_blank" rel="noopener noreferrer" class="game-store-link playstore">PlayStore</a><a href="https://apps.apple.com/us/search?term=${encodedGameName}" target="_blank" rel="noopener noreferrer" class="game-store-link appstore">AppStore</a>`;
        if (gameName === 'Download Roblox') { linksHTML += `<a href="https://www.roblox.com/id/download" target="_blank" rel="noopener noreferrer" class="game-store-link">Other Devices</a>`; }
        const contentHTML = `<div class="popup-game-links">${linksHTML}</div><button class="popup-back-button" data-category="${categoryKey}">← Kembali</button>`;
        popupContent.innerHTML = contentHTML;
        popupBox.className = 'popup-box game-download-view';
    };

    const showRobloxGamePopup = (game, categoryKey) => {
        popupTitle.textContent = game.name;
        const searchUrl = `https://www.roblox.com/id/discover/?Keyword=${encodeURIComponent(game.name)}`;
        const contentHTML = `<a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="roblox-game-link"><b>Buka game ini di Roblox</b></a><p class="game-description">${game.desc}</p><button class="popup-back-button" data-category="${categoryKey}">← Kembali</button>`;
        popupContent.innerHTML = contentHTML;
        popupBox.className = 'popup-box roblox-game-view';
    };

    // -- POPUP STANDAR --
    const showStandardPopup = (trigger) => {
        const type = trigger.getAttribute('data-type'), title = trigger.getAttribute('data-title'), url = trigger.getAttribute('data-url'), desc = trigger.getAttribute('data-desc');
        popupTitle.innerHTML = title;
        popupContent.innerHTML = `<p>${desc}</p>`;
        if (type === 'info') { currentUrl = null; popupBox.className = 'popup-box info-mode'; } else { currentUrl = url; popupBox.className = 'popup-box link-mode'; }
        popupOverlay.classList.add('show');
    };
    
    // === EVENT LISTENERS ===
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = trigger.getAttribute('data-type');
            if (type === 'music-category') { showMusicCategoryPopup(trigger.getAttribute('data-category')); } 
            else if (type === 'game-category') { showGameCategoryPopup(trigger.getAttribute('data-category')); } 
            else { showStandardPopup(trigger); }
        });
    });

    popupBox.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = e.target;
        if (target.matches('.artist-item')) { showArtistDetailPopup(target.getAttribute('data-artist-name'), target.getAttribute('data-category')); }
        else if (target.matches('.game-item')) {
            const gameName = target.getAttribute('data-game-name'); const categoryKey = target.getAttribute('data-category');
            if (categoryKey === 'roblox') {
                if (gameName === gameData.roblox.download.name) { showGameDownloadPopup(gameName, categoryKey); } 
                else { const gameObj = gameData.roblox.games.find(g => g.name === gameName); if(gameObj) showRobloxGamePopup(gameObj, categoryKey); }
            } else { showGameDownloadPopup(gameName, categoryKey); }
        }
        else if (target.matches('.popup-back-button')) {
            const categoryKey = target.getAttribute('data-category');
            if (Object.keys(gameData).includes(categoryKey)) { showGameCategoryPopup(categoryKey); } 
            else { showMusicCategoryPopup(categoryKey); }
        }
        else if (popupBox.classList.contains('link-mode') && currentUrl) { window.open(currentUrl, '_blank'); }
    });

    popupOverlay.addEventListener('click', () => {
        popupOverlay.classList.remove('show');
    });
});