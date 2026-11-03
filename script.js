/**
 * Rashfox Anime Portfolio Interactive Script ✨
 * Hanya menampilkan karya asli buatan Rashfox (Original Creator / Built by Rashfox),
 * termasuk project privat & bot WhatsApp unggulan: RPRO Bot!
 */

const REPOSITORIES = [
    {
        name: "NioBot",
        desc: "Bot WhatsApp utama buatan Rashfox dengan engine otomasi pesan, multimedia downloader, custom anime commands, dan fitur utility serba bisa.",
        lang: "Node.js / Baileys",
        langColor: "#339933",
        stars: 1,
        badgeType: "public",
        category: "bot",
        meme: "🤖 'Bot WhatsApp andalan sang creator: online terus tanpa ampun!'",
        url: "https://github.com/Rashfox/NioBot",
        linkText: "GitHub"
    },
    {
        name: "almustaqim",
        desc: "Website Resmi Informasi UKM Majelis Al-Mustaqim Politeknik Negeri Cilacap.",
        lang: "Blade / Laravel",
        langColor: "#f05340",
        stars: 1,
        badgeType: "public",
        category: "web",
        meme: "🕌 'Web dakwah kampus PNC full berkah no bug allowed!'",
        url: "https://github.com/Rashfox/almustaqim",
        linkText: "GitHub"
    },
    {
        name: "Nio Chat AI",
        desc: "Nio: Personal, self-hosted AI chat environment buatan sendiri. Dibangun penuh pakai .NET & Blazor Razor components untuk chatting AI lokal tanpa cloud.",
        lang: "C# / Blazor",
        langColor: "#239120",
        stars: 1,
        badgeType: "public",
        category: "ai-desktop",
        meme: "🧠 'Punya waifu AI sendiri di localhost, gak perlu pusing mikir kuota API!'",
        url: "https://github.com/Rashfox/Nio-Chat-AI",
        linkText: "GitHub"
    },
    {
        name: "pkl-fw",
        desc: "Sistem informasi pengelolaan PKL (Praktek Kerja Lapangan) modern berbasis Laravel Framework & JavaScript.",
        lang: "Laravel / JS",
        langColor: "#f7df1e",
        stars: 0,
        badgeType: "public",
        category: "web",
        meme: "📑 'Teman sejati pejuang magang saat mengejar tanda tangan dosen pembimbing.'",
        url: "https://github.com/Rashfox/pkl-fw",
        linkText: "GitHub"
    },
    {
        name: "Web NightRaid",
        desc: "Website anime project bernuansa Night Raid (Akame ga Kill) dengan tata letak visual elegan buatan tangan sendiri.",
        lang: "HTML / CSS",
        langColor: "#e34f26",
        stars: 1,
        badgeType: "public",
        category: "web",
        meme: "⚔️ 'Membasmi bug sampai ke akar seperti pasukan Night Raid!'",
        url: "https://github.com/Rashfox/Web-Night-Raid",
        linkText: "GitHub"
    },
    {
        name: "Kelompok3",
        desc: "Aplikasi tugas algoritma dan implementasi struktur data berbasis PHP & database MySQL.",
        lang: "PHP / SQL",
        langColor: "#777bb4",
        stars: 1,
        badgeType: "public",
        category: "web",
        meme: "📚 'Ketika struktur data linked list berhasil ditaklukkan tanpa error.'",
        url: "https://github.com/Rashfox/Kelompok3",
        linkText: "GitHub"
    },
    {
        name: "TMI",
        desc: "Aplikasi web internal management information system berbasis PHP natif.",
        lang: "PHP",
        langColor: "#777bb4",
        stars: 1,
        badgeType: "public",
        category: "web",
        meme: "✨ 'Karya tulus mahasiswa informatika untuk mempermudah hidup.'",
        url: "https://github.com/Rashfox/TMI",
        linkText: "GitHub"
    },
    {
        name: "pool",
        desc: "Konfigurasi kustom Minecraft Bedrock server engine dan optimasi paket jaringan.",
        lang: "Shell / Config",
        langColor: "#89e051",
        stars: 1,
        badgeType: "public",
        category: "sys-tools",
        meme: "⛏️ 'Setup server bedrock lancar tanpa lag, siap mabar semalaman!'",
        url: "https://github.com/Rashfox/pool",
        linkText: "GitHub"
    },
    {
        name: "Rockyou",
        desc: "Wordlist repository & security analysis tools untuk audit kekuatan kata sandi pengguna.",
        lang: "Security / Wordlist",
        langColor: "#ef4444",
        stars: 1,
        badgeType: "public",
        category: "sys-tools",
        meme: "🛡️ 'Peringatan: Jangan pernah pakai tanggal jadian buat password root!'",
        url: "https://github.com/Rashfox/Rockyou",
        linkText: "GitHub"
    },
];

// Anime Programmer Quotes
const ANIME_QUOTES = [
    "\"Kalo kodinganmu error, jangan nangis. Peluk bantal waifu dulu, baru git reset --hard.\"",
    "\"Programmer wibu tidak pernah menyerah sebelum 'Build Succeeded' menyala hijau! (๑•̀ㅂ•́)و\"",
    "\"Omae wa mou shindeiru... kata senior pas liat aku push langsung ke branch main.\"",
    "\"Cinta itu seperti variabel private: sulit diakses dari luar tanpa getter & setter.\"",
    "\"Jangan tanya kenapa mikrotik-nya bunyi bip-bip, itu dia lagi bilang 'Onii-chan, ganbatte!'.\"",
    "\"Server down adalah cara semesta menyuruhmu bikin mi instan dan nonton satu episode anime.\"",
    "\"Bug di production itu kayak titan di Shingeki no Kyojin: muncul tiba-tiba ngerusak dinding harapan.\"",
    "\"Kompilasi tanpa warning itu mitos, sama kayak waifu 2D yang beneran nyata di dunia 3D.\""
];

// Avatar Dialogue Lines
const AVATAR_LINES = [
    "Nyaan~ Jangan klik mukaku terus dong baka! >///<",
    "Konbanwa! Mau dibikinin bot WA RPRO atau di-setup-in router?",
    "Ping ke google.com aman, kopi masih anget, hidup itu indah~",
    "Ketik 'sudo rm -rf /*' ? JANGAN YA DEK YA! (╥﹏╥)",
    "Rash di sini, siap jadi pahlawan jaringanmu!",
    "Sugoi! Kamu nemu easter egg tersembunyi! ✨"
];

// Anime Sound Effects Player (Real Voice Clips + Synthesizer fallback)
class AnimeSoundFx {
    constructor() {
        this.ctx = null;
        this.audioClips = {
            'ara': new Audio('sounds/ara-ara.mp3'),
            'yamete': new Audio('sounds/yamete.mp3'),
            'nani': new Audio('sounds/nani.mp3'),
            'ganbare': new Audio('sounds/ganbare.mp3'),
            'uwu': new Audio('sounds/uwu.mp3'),
            'konnichiwa': new Audio('sounds/konnichiwa.mp3'),
            'itai': new Audio('sounds/itai.mp3'),
            'ultra': new Audio('sounds/ultra-instinct.mp3'),
            // Suara ketawa meme kucing ngakak menghina (cat-laugh-meme)
            'mocking-laugh': new Audio('sounds/cat-laugh-meme.mp3')
        };
        this.currentAudio = null;
    }

    play(sfxName) {
        try {
            if (this.currentAudio) {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
            }

            const audio = this.audioClips[sfxName];
            if (audio) {
                audio.currentTime = 0;
                audio.volume = 0.9;
                this.currentAudio = audio;
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.log("Audio play error, falling back to synth:", err);
                        this.playSynth(sfxName);
                    });
                }
            } else {
                this.playSynth(sfxName);
            }
        } catch (err) {
            console.log("Audio playback error:", err);
        }
    }

    playSynth(sfxName) {
        try {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContext();
            }
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        } catch (e) {
            console.log("Synth error:", e);
        }
    }
}

const sfxEngine = new AnimeSoundFx();

// Render Projects to DOM
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = filter === 'all' 
        ? REPOSITORIES 
        : REPOSITORIES.filter(repo => repo.category === filter);

    filtered.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card glass-card';

        let typeBadge = '';
        if (repo.badgeType === 'private') {
            typeBadge = `<span class="project-type-tag tag-private"><i class="fa-solid fa-lock"></i> Private Repo</span>`;
        } else {
            typeBadge = `<span class="project-type-tag tag-original"><i class="fa-solid fa-crown"></i> Original Work</span>`;
        }

        const isExternal = repo.url.startsWith('http');
        const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';

        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">
                    <i class="fa-regular fa-folder-closed text-pink"></i>
                    ${repo.name}
                </h3>
                ${typeBadge}
            </div>
            <p class="project-desc">${repo.desc}</p>
            <div class="project-meme-comment">
                ${repo.meme}
            </div>
            <div class="project-footer">
                <div class="project-meta">
                    <span class="lang-indicator">
                        <span class="lang-dot" style="background-color: ${repo.langColor}"></span>
                        ${repo.lang}
                    </span>
                    <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
                </div>
                <a href="${repo.url}" ${targetAttr} class="project-link-btn">
                    ${repo.linkText} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Sakura Falling Petals Generator
function createSakuraPetal() {
    const container = document.getElementById('sakura-container');
    if (!container) return;

    const petal = document.createElement('div');
    petal.className = 'petal';

    const size = Math.random() * 12 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 5 + 6;
    petal.style.animationDuration = `${duration}s`;
    petal.style.opacity = (Math.random() * 0.5 + 0.4).toFixed(2);

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Projects Render
    renderProjects('all');

    // 2. Filter Buttons Click
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderProjects(category);
            sfxEngine.play('nya');
        });
    });

    // 3. Soundboard Buttons
    const soundBtns = document.querySelectorAll('.sound-btn');
    const sfxStatus = document.getElementById('sfx-status');
    soundBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sfxKey = btn.getAttribute('data-sfx');
            sfxEngine.play(sfxKey);
            if (sfxStatus) {
                sfxStatus.textContent = `Sedang memutar: "${btn.textContent.trim()}" ✨`;
                sfxStatus.style.color = '#ff6b9d';
            }
        });
    });

    // 4. Global Sound Button in Navbar
    const themeSoundBtn = document.getElementById('theme-sound-btn');
    if (themeSoundBtn) {
        themeSoundBtn.addEventListener('click', () => {
            sfxEngine.play('wow');
        });
    }

    // 5. Wisdom Generator
    const wisdomBtn = document.getElementById('new-wisdom-btn');
    const wisdomText = document.getElementById('wisdom-text');
    if (wisdomBtn && wisdomText) {
        wisdomBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * ANIME_QUOTES.length);
            wisdomText.style.opacity = '0';
            setTimeout(() => {
                wisdomText.textContent = ANIME_QUOTES[randomIndex];
                wisdomText.style.opacity = '1';
            }, 200);
            sfxEngine.play('nya');
        });
    }

    // 6. Interactive Avatar
    const avatarCard = document.querySelector('.avatar-card');
    const avatarDialogue = document.getElementById('avatar-dialogue');
    if (avatarCard && avatarDialogue) {
        avatarCard.addEventListener('click', () => {
            const randomLine = AVATAR_LINES[Math.floor(Math.random() * AVATAR_LINES.length)];
            avatarDialogue.textContent = randomLine;
            avatarDialogue.style.transform = 'scale(1.05)';
            setTimeout(() => {
                avatarDialogue.style.transform = 'scale(1)';
            }, 200);
            sfxEngine.play('nya');
        });
    }

    // 7. Meme Modal Triggers with Smart 5-Item Queue Cache & Preloader
    const memeModal = document.getElementById('meme-modal');
    const memeModalTrigger = document.getElementById('meme-modal-trigger');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    const memeGifImg = document.querySelector('.meme-gif');
    const memeAnimeSource = document.getElementById('meme-anime-source');

    const FALLBACK_WAITING_GIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXlldWg4aW5pM2ZlbXdwZTR4cTJ0N3NvZ3M3dXE4OGdyZDc1MDJzZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2g6sCTsSoVuSfSxK4W/giphy.gif";
    
    // In-memory GIF cache queue (maksimal 5 item)
    let memeCache = [];
    let isRefilling = false;

    // Fungsi fetch batch 5 GIF saat page load
    async function initMemeCache() {
        try {
            const res = await fetch('https://nekos.best/api/v2/laugh?amount=5');
            const data = await res.json();
            if (data && data.results && data.results.length > 0) {
                memeCache = data.results.map(item => ({
                    url: item.url,
                    anime_name: item.anime_name
                }));
                // Preload image pertama ke browser cache
                if (memeCache.length > 0) {
                    const img = new Image();
                    img.src = memeCache[0].url;
                }
            }
        } catch (err) {
            console.log("Init cache nekos.best gagal, fallback ready:", err);
        }
    }

    // Fungsi refill background: hapus 1, ambil 1 baru agar kuota tetap 5
    async function replenishOneMeme() {
        if (isRefilling) return;
        isRefilling = true;
        try {
            const res = await fetch('https://nekos.best/api/v2/laugh');
            const data = await res.json();
            if (data && data.results && data.results.length > 0) {
                const newItem = {
                    url: data.results[0].url,
                    anime_name: data.results[0].anime_name
                };
                memeCache.push(newItem);
                // Preload item baru di background
                const img = new Image();
                img.src = newItem.url;
            }
        } catch (e) {
            console.log("Replenish single meme error:", e);
        } finally {
            isRefilling = false;
        }
    }

    // Handler klik tombol meme
    async function triggerMemeAction() {
        let currentItem = null;

        if (memeCache.length > 0) {
            // Ambil 1 terdepan (FIFO)
            currentItem = memeCache.shift();
            // Ambil 1 baru di background biar isi cache tetap berputar 5 item
            replenishOneMeme();
        }

        if (currentItem) {
            // Sudah ada di cache! Langsung tampilkan seketika tanpa nunggu fetch
            if (memeGifImg) memeGifImg.src = currentItem.url;
            if (memeAnimeSource) {
                memeAnimeSource.textContent = `Anime: ${currentItem.anime_name || 'Anime Laugh'} 🎭`;
            }
            if (memeModal) memeModal.classList.add('active');
            sfxEngine.play('mocking-laugh');
        } else {
            // Jika cache belum selesai terisi (misal baru buka langsung klik)
            // Tampilkan fallback gif waiting yang diminta user
            if (memeGifImg) memeGifImg.src = FALLBACK_WAITING_GIF;
            if (memeAnimeSource) memeAnimeSource.textContent = "Lagi nunggu waifu ketawa ngakak... 🐱⏳";
            if (memeModal) memeModal.classList.add('active');
            sfxEngine.play('mocking-laugh');

            // Coba fetch darurat 1 item
            try {
                const res = await fetch('https://nekos.best/api/v2/laugh');
                const data = await res.json();
                if (data && data.results && data.results.length > 0) {
                    const freshItem = data.results[0];
                    if (memeGifImg) memeGifImg.src = freshItem.url;
                    if (memeAnimeSource) memeAnimeSource.textContent = `Anime: ${freshItem.anime_name} 🎭`;
                }
            } catch (err) {
                console.log("Emergency fetch error:", err);
            }
        }
    }

    if (memeModal && memeModalTrigger) {
        memeModalTrigger.addEventListener('click', triggerMemeAction);

        const closeModal = () => {
            memeModal.classList.remove('active');
            sfxEngine.play('tadaima');
        };

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

        memeModal.addEventListener('click', (e) => {
            if (e.target === memeModal) closeModal();
        });
    }

    // 7b. Mobile Hamburger Drawer 🍔
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-item');

    function openDrawer() {
        if (!mobileDrawer || !drawerOverlay) return;
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (!mobileDrawer || !drawerOverlay) return;
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

    // Close drawer on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    // Panggil init cache langsung saat script berjalan (page reload/refresh)
    initMemeCache();

    // 8. Sakura Rain Loop (subtle)
    setInterval(createSakuraPetal, 450);

    // 9. Update Current Year in Footer
    const curYearSpan = document.getElementById('cur-year');
    if (curYearSpan) {
        curYearSpan.textContent = new Date().getFullYear();
    }
});
