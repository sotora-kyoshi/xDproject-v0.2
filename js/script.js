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
        description: "Bangun apa saja yang bisa kamu bayangkan! Jelajahi dunia balok yang tak terbatas dan pilih edisi yang tepat untukmu.",
        links: [
            { name: "Java Edition", url: "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc", cssClass: "java" },
            { name: "Bedrock Edition", url: "https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc", cssClass: "bedrock" },
            { name: "PlayStore", url: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe", cssClass: "playstore" },
            { name: "AppStore", url: "https://apps.apple.com/us/app/minecraft/id479516143", cssClass: "appstore" }
        ]
    },
    hoyoverse: {
        title: "Hoyoverse Games",
        games: [
            { name: "Genshin Impact", desc: "Jelajahi dunia fantasi Teyvat yang luas dalam RPG open-world dengan visual anime yang memukau." },
            { name: "Honkai: Star Rail", desc: "Naik kereta Astral Express dan jelajahi keajaiban galaksi dalam RPG fantasi luar angkasa." },
            { name: "Zenless Zone Zero", desc: "Gim action RPG urban fantasi dengan gaya visual trendi dan pertempuran yang cepat." }
        ]
    },
    rhythm: { 
        title: "Rhythm Games", 
        games: [
            { name: "Rhythm Hive", desc: "Mainkan lagu-lagu dari artis HYBE favoritmu seperti BTS, TXT, dan ENHYPEN." }
        ] 
    },
    simulator: { 
        title: "Simulator Games", 
        games: [
            { name: "Township", desc: "Bangun kota impianmu! Panen tanaman, jalankan pabrik, dan jual barang untuk mengembangkan kotamu." },
            { name: "Hayday", desc: "Rasakan kehidupan bertani, rawat ternak, dan berdagang hasil panen dengan tetangga dan teman." }
        ] 
    },
    honorable: { 
        title: "Honorable Mentions", 
        games: [
            { name: "Geometry Dash", desc: "Lompati dan terbang melewati bahaya dalam platformer berbasis ritme yang menantang." },
            { name: "Cookierun: Kingdom", desc: "Bangun kerajaan kue kering impianmu sambil bertarung melawan monster kue yang jahat." },
            { name: "Sky: Children of the Light", desc: "Terbang melintasi dunia magis yang indah dalam petualangan sosial yang mengharukan." },
            { name: "Puzzle Seventeen", desc: "Gim puzzle match-3 yang seru dan adiktif dengan tema grup K-Pop SEVENTEEN." },
            { name: "Plato: Fun Multiplayer Games", desc: "Kumpulan lebih dari 45 game grup yang bisa dimainkan bersama teman-temanmu." },
            { name: "Undercover: Word Party Game", desc: "Gim kata sosial untuk menemukan identitas rahasia pemain lain dalam kelompok." }
        ] 
    },
    random: { 
        title: "Random Games", 
        games: [
            { name: "Subway Surfers", desc: "Lari secepat mungkin dan hindari kereta yang melaju dalam gim endless runner yang ikonik." },
            { name: "Among Us", desc: "Bekerja sama atau berkhianat dalam gim multiplayer tentang kerja tim dan pengkhianatan di luar angkasa." },
            { name: "Stumble Guys", desc: "Berlari, tersandung, dan jatuh melewati rintangan-rintangan lucu melawan 32 pemain lain." }
        ],
        infoText: "Beberapa PS4, PS5, sama PSP games."
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupBox = document.getElementById('popupBox');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    let currentUrl = '';

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
        const linksHTML = `<p>Dengarkan musik dari <strong>${artistName}</strong> di platform favorit kamu (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧</p><div class="popup-artist-links"><a href="https://open.spotify.com/search/$${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link spotify">Spotify</a><a href="https://music.apple.com/us/search?term=${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link apple">Apple Music</a><a href="https://www.youtube.com/results?search_query=${encodedArtistName}" target="_blank" rel="noopener noreferrer" class="music-platform-link youtube">YouTube</a></div>`;
        const backButtonHTML = `<button class="popup-back-button" data-category="${categoryKey}">← Kembali</button>`;
        popupContent.innerHTML = linksHTML + backButtonHTML;
        popupBox.className = 'popup-box music-artist-view';
    };
    
    const showGameCategoryPopup = (categoryKey) => {
        const category = gameData[categoryKey];
        if (!category) return;
        popupTitle.textContent = category.title;
        let contentHTML = '';
        if (category.type === 'direct_links') {
            if (category.description) {
                contentHTML += `<p class="game-description" style="text-align: center; margin-bottom: 15px;">${category.description}</p>`;
            }
            contentHTML += `<div class="popup-game-links">${category.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="game-store-link ${link.cssClass}">${link.name}</a>`).join('')}</div>`;
        } else if (categoryKey === 'roblox') {
            contentHTML += `<div class="game-item" data-game-name="${category.download.name}" data-category="${categoryKey}">${category.download.name}</div>`;
            contentHTML += category.games.map(game => `<div class="game-item" data-game-name="${game.name}" data-category="${categoryKey}">${game.name}</div>`).join('');
        } else {
            contentHTML = category.games.map(game => `<div class="game-item" data-game-name="${game.name}" data-category="${categoryKey}">${game.name}</div>`).join('');
        }
        if (category.infoText) { contentHTML += `<p class="popup-info-text">${category.infoText}</p>`; }
        popupContent.innerHTML = contentHTML;
        popupBox.className = 'popup-box game-category-view';
        popupOverlay.classList.add('show');
    };

    const showGameDownloadPopup = (game, categoryKey) => {
        popupTitle.textContent = game.name;
        const encodedGameName = encodeURIComponent(game.name);
        let contentHTML = '';
        if (game.name === 'Download Roblox') {
            contentHTML = `<div class="popup-game-links">
                <a href="${gameData.roblox.download.links.playstore}" target="_blank" rel="noopener noreferrer" class="game-store-link playstore">PlayStore</a>
                <a href="${gameData.roblox.download.links.appstore}" target="_blank" rel="noopener noreferrer" class="game-store-link appstore">AppStore</a>
                <a href="https://www.roblox.com/id/download" target="_blank" rel="noopener noreferrer" class="game-store-link">Other Devices</a>
            </div>`;
        } else {
            contentHTML = `
                <p class="game-description">${game.desc}</p>
                <div class="popup-game-links">
                    <a href="https://play.google.com/store/search?q=${encodedGameName}&c=apps" target="_blank" rel="noopener noreferrer" class="game-store-link playstore">PlayStore</a>
                    <a href="https://apps.apple.com/us/search?term=${encodedGameName}" target="_blank" rel="noopener noreferrer" class="game-store-link appstore">AppStore</a>
                </div>
            `;
        }
        contentHTML += `<button class="popup-back-button" data-category="${categoryKey}">← Kembali</button>`;
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

    const showStandardPopup = (trigger) => {
        const type = trigger.getAttribute('data-type'), title = trigger.getAttribute('data-title'), url = trigger.getAttribute('data-url'), desc = trigger.getAttribute('data-desc');
        popupTitle.innerHTML = title;
        popupContent.innerHTML = `<p>${desc}</p>`;
        if (type === 'info') { currentUrl = null; popupBox.className = 'popup-box info-mode'; } else { currentUrl = url; popupBox.className = 'popup-box link-mode'; }
        popupOverlay.classList.add('show');
    };
    
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
            const gameName = target.getAttribute('data-game-name');
            const categoryKey = target.getAttribute('data-category');
            
            if (categoryKey === 'roblox') {
                if (gameName === gameData.roblox.download.name) {
                    showGameDownloadPopup({name: gameName, desc: ''}, categoryKey);
                } else {
                    const gameObj = gameData.roblox.games.find(g => g.name === gameName);
                    if(gameObj) showRobloxGamePopup(gameObj, categoryKey);
                }
            } 
            else {
                const category = gameData[categoryKey];
                const gameObj = category.games.find(g => g.name === gameName);
                if (gameObj) showGameDownloadPopup(gameObj, categoryKey);
            }
        }
        else if (target.matches('.popup-back-button')) {
            const categoryKey = target.getAttribute('data-category');
            if (Object.keys(gameData).includes(categoryKey)) {
                showGameCategoryPopup(categoryKey);
            } else {
                showMusicCategoryPopup(categoryKey);
            }
        }
        else if (popupBox.classList.contains('link-mode') && currentUrl) { window.open(currentUrl, '_blank'); }
    });

    popupOverlay.addEventListener('click', () => {
        popupOverlay.classList.remove('show');
    });
});
    
