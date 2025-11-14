// =================================================================
// Configuration & Data
// =================================================================

// 1. 99 Names of Allah (Asma ul Husna) Data
const asmaUlHusna = [
    { ar: "ٱلرَّحْمَٰنُ", translit: "Ar-Rahmān", meaning: "The Most Gracious" },
    { ar: "ٱلرَّحِيمُ", translit: "Ar-Raḥīm", meaning: "The Most Merciful" },
    { ar: "ٱلْمَلِكُ", translit: "Al-Malik", meaning: "The King, The Sovereign" },
    { ar: "ٱلْقُدُّوسُ", translit: "Al-Quddūs", meaning: "The Holy One, The Pure" },
    { ar: "ٱلسَّلَامُ", translit: "As-Salām", meaning: "The Source of Peace" },
    { ar: "ٱلْمُؤْمِنُ", translit: "Al-Mu'min", meaning: "The Giver of Faith" },
    { ar: "ٱلْمُهَيْمِنُ", translit: "Al-Muhaymin", meaning: "The Protector, The Giver of Assurance" },
    { ar: "ٱلْعَزِيزُ", translit: "Al-Azīz", meaning: "The Almighty, The Invincible" },
    { ar: "ٱلْجَبَّارُ", translit: "Al-Jabbār", meaning: "The Compeller, The Restorer" },
    { ar: "ٱلْمُتَكَبِّرُ", translit: "Al-Mutakabbir", meaning: "The Supreme, The Majestic" },
    { ar: "ٱلْخَالِقُ", translit: "Al-Khāliq", meaning: "The Creator" },
    { ar: "ٱلْبَارِئُ", translit: "Al-Bāri'", meaning: "The Evolver, The Maker" },
    { ar: "ٱلْمُصَوِّرُ", translit: "Al-Muṣawwir", meaning: "The Fashioner, The Designer" },
    { ar: "ٱلْغَفَّارُ", translit: "Al-Ghaffār", meaning: "The Forgiving" },
    { ar: "ٱلْقَهَّارُ", translit: "Al-Qahhār", meaning: "The Subduer, The Irresistible" },
    { ar: "ٱلْوَهَّابُ", translit: "Al-Wahhāb", meaning: "The Bestower" },
    { ar: "ٱلرَّزَّاقُ", translit: "Ar-Razzāq", meaning: "The Provider" },
    { ar: "ٱلْفَتَّاحُ", translit: "Al-Fattāḥ", meaning: "The Opener, The Decider" },
    { ar: "ٱلْعَلِيمُ", translit: "Al-Alīm", meaning: "The All-Knowing" },
    { ar: "ٱلْقَابِضُ", translit: "Al-Qābiḍ", meaning: "The Constrictor, The Withholder" },
    { ar: "ٱلْبَاسِطُ", translit: "Al-Bāsiṭ", meaning: "The Expander, The Enlarger" },
    { ar: "ٱلْخَافِضُ", translit: "Al-Khāfiḍ", meaning: "The Abaser" },
    { ar: "ٱلرَّافِعُ", translit: "Ar-Rāfi", meaning: "The Exalter" },
    { ar: "ٱلْمُعِزُّ", translit: "Al-Mu'izz", meaning: "The Giver of Honour" },
    { ar: "ٱلْمُذِلُّ", translit: "Al-Mu'dill", meaning: "The Giver of Dishonour" },
    { ar: "ٱلسَّمِيعُ", translit: "As-Samī'", meaning: "The All-Hearing" },
    { ar: "ٱلْبَصِيرُ", translit: "Al-Baṣīr", meaning: "The All-Seeing" },
    { ar: "ٱلْحَكَمُ", translit: "Al-Ḥakam", meaning: "The Judge, The Arbitrator" },
    { ar: "ٱلْعَدْلُ", translit: "Al-'Adl", meaning: "The Just" },
    { ar: "ٱللَّطِيفُ", translit: "Al-Laṭīf", meaning: "The Subtle One, The Kind" },
    { ar: "ٱلْخَبِيرُ", translit: "Al-Khabīr", meaning: "The All-Aware" },
    { ar: "ٱلْحَلِيمُ", translit: "Al-Ḥalīm", meaning: "The Forbearing" },
    { ar: "ٱلْعَظِيمُ", translit: "Al-Aẓīm", meaning: "The Magnificent" },
    { ar: "ٱلْغَفُورُ", translit: "Al-Ghafūr", meaning: "The All-Forgiving" },
    { ar: "ٱلشَّكُورُ", translit: "Ash-Shakūr", meaning: "The Appreciative" },
    { ar: "ٱلْعَلِيُّ", translit: "Al-Alī", meaning: "The Most High" },
    { ar: "ٱلْكَبِيرُ", translit: "Al-Kabīr", meaning: "The Most Great" },
    { ar: "ٱلْحَفِيظُ", translit: "Al-Ḥafīẓ", meaning: "The Preserver" },
    { ar: "ٱلْمُقِيتُ", translit: "Al-Muqīt", meaning: "The Maintainer, The Nourisher" },
    { ar: "ٱلْحَسِيبُ", translit: "Al-Ḥasīb", meaning: "The Reckoner" },
    { ar: "ٱلْجَلِيلُ", translit: "Al-Jalīl", meaning: "The Majestic" },
    { ar: "ٱلْكَرِيمُ", translit: "Al-Karīm", meaning: "The Generous" },
    { ar: "ٱلرَّقِيبُ", translit: "Ar-Raqīb", meaning: "The Watchful" },
    { ar: "ٱلْمُجِيبُ", translit: "Al-Mujīb", meaning: "The Responder to Prayer" },
    { ar: "ٱلْوَاسِعُ", translit: "Al-Wāsi", meaning: "The All-Encompassing" },
    { ar: "ٱلْحَكِيمُ", translit: "Al-Ḥakīm", meaning: "The All-Wise" },
    { ar: "ٱلْوَادُّ", translit: "Al-Wadūd", meaning: "The Loving One" },
    { ar: "ٱلْمَجِيدُ", translit: "Al-Majīd", meaning: "The Most Glorious" },
    { ar: "ٱلْبَاعِثُ", translit: "Al-Bā'ith", meaning: "The Resurrector" },
    { ar: "ٱلشَّهِيدُ", translit: "Ash-Shahīd", meaning: "The Witness" },
    { ar: "ٱلْحَقُّ", translit: "Al-Ḥaqq", meaning: "The Truth" },
    { ar: "ٱلْوَكِيلُ", translit: "Al-Wakīl", meaning: "The Trustee, The Guardian" },
    { ar: "ٱلْقَوِيُّ", translit: "Al-Qawī", meaning: "The Most Strong" },
    { ar: "ٱلْمَتِينُ", translit: "Al-Matīn", meaning: "The Firm, The Steadfast" },
    { ar: "ٱلْوَلِيُّ", translit: "Al-Walī", meaning: "The Protecting Friend" },
    { ar: "ٱلْحَمِيدُ", translit: "Al-Ḥamīd", meaning: "The Praiseworthy" },
    { ar: "ٱلْمُحْصِي", translit: "Al-Muḥṣī", meaning: "The Reckoner" },
    { ar: "ٱلْمُبْدِئُ", translit: "Al-Mubdi'", meaning: "The Originator" },
    { ar: "ٱلْمُعِيدُ", translit: "Al-Mu'īd", meaning: "The Restorer, The Reproducer" },
    { ar: "ٱلْمُحْيِ", translit: "Al-Muḥyī", meaning: "The Giver of Life" },
    { ar: "ٱلْمُمِيتُ", translit: "Al-Mumīt", meaning: "The Taker of Life" },
    { ar: "ٱلْحَيُّ", translit: "Al-Ḥayy", meaning: "The Ever-Living" },
    { ar: "ٱلْقَيُّومُ", translit: "Al-Qayyūm", meaning: "The Self-Subsisting, The Sustainer" },
    { ar: "ٱلْوَاجِدُ", translit: "Al-Wājid", meaning: "The Finder, The Present" },
    { ar: "ٱلْمَاجِدُ", translit: "Al-Mājid", meaning: "The Illustrious, The Noble" },
    { ar: "ٱلْوَاحِدُ", translit: "Al-Wāḥid", meaning: "The One" },
    { ar: "ٱلْأَحَدُ", translit: "Al-Aḥad", meaning: "The Only One" },
    { ar: "ٱلصَّمَدُ", translit: "Aṣ-Ṣamad", meaning: "The Eternal, The Absolute" },
    { ar: "ٱلْقَادِرُ", translit: "Al-Qādir", meaning: "The All-Powerful" },
    { ar: "ٱلْمُقْتَدِرُ", translit: "Al-Muqtadir", meaning: "The Omnipotent, The Able" },
    { ar: "ٱلْمُقَدِّمُ", translit: "Al-Muqaddim", meaning: "The Advancer, The Expediter" },
    { ar: "ٱلْمُؤَخِّرُ", translit: "Al-Mu'akhkhir", meaning: "The Delayer, The Retarder" },
    { ar: "ٱلْأَوَّلُ", translit: "Al-Awwal", meaning: "The First" },
    { ar: "ٱلْآخِرُ", translit: "Al-Ākhir", meaning: "The Last" },
    { ar: "ٱلظَّاهِرُ", translit: "Aẓ-Ẓāhir", meaning: "The Manifest, The Evident" },
    { ar: "ٱلْبَاطِنُ", translit: "Al-Bāṭin", meaning: "The Hidden, The Inner" },
    { ar: "ٱلْوَالِي", translit: "Al-Wālī", meaning: "The Governor, The Protector" },
    { ar: "ٱلْمُتَعَالِي", translit: "Al-Muta'ālī", meaning: "The Most Exalted" },
    { ar: "ٱلْبَرُّ", translit: "Al-Barr", meaning: "The Source of Goodness, The Pious" },
    { ar: "ٱلتَّوَّابُ", translit: "At-Tawwāb", meaning: "The Acceptor of Repentance" },
    { ar: "ٱلْمُنْتَقِمُ", translit: "Al-Muntaqim", meaning: "The Avenger" },
    { ar: "ٱلْعَفُوُّ", translit: "Al-'Afūw", meaning: "The Pardoner" },
    { ar: "ٱلرَّءُوفُ", translit: "Ar-Ra'ūf", meaning: "The Compassionate, The Kind" },
    { ar: "مَالِكُ ٱلْمُلْكِ", translit: "Mālik-ul-Mulk", meaning: "The Owner of All Sovereignty" },
    { ar: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ", translit: "Dhul-Jalāli wal-Ikrām", meaning: "The Lord of Majesty and Honour" },
    { ar: "ٱلْمُقْسِطُ", translit: "Al-Muqsiṭ", meaning: "The Equitable, The Just" },
    { ar: "ٱلْجَامِعُ", translit: "Al-Jāmi'", meaning: "The Gatherer, The Unifier" },
    { ar: "ٱلْغَنِيُّ", translit: "Al-Ghanī", meaning: "The Self-Sufficient, The Rich" },
    { ar: "ٱلْمُغْنِي", translit: "Al-Mughnī", meaning: "The Enricher" },
    { ar: "ٱلْمَانِعُ", translit: "Al-Māni'", meaning: "The Preventer, The Defender" },
    { ar: "ٱلضَّارُّ", translit: "Aḍ-Ḍārr", meaning: "The Distressor (Harmer)" },
    { ar: "ٱلنَّافِعُ", translit: "An-Nāfi", meaning: "The Benefiter" },
    { ar: "ٱلنُّورُ", translit: "An-Nūr", meaning: "The Light" },
    { ar: "ٱلْهَادِي", translit: "Al-Hādī", meaning: "The Guide" },
    { ar: "ٱلْبَدِيعُ", translit: "Al-Badī'", meaning: "The Originator, The Incomparable" },
    { ar: "ٱلْبَاقِي", translit: "Al-Bāqī", meaning: "The Everlasting" },
    { ar: "ٱلْوَارِثُ", translit: "Al-Wārith", meaning: "The Inheritor, The Supreme Heir" },
    { ar: "ٱلرَّشِيدُ", translit: "Ar-Rashīd", meaning: "The Guide to the Right Path" },
    { ar: "ٱلصَّبُورُ", translit: "Aṣ-Ṣabūr", meaning: "The Patient" }
];

// Prayer time data and icon configuration
const PRAYER_NAMES = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
let prayerTimesToday = {}; 

const prayerIcons = {
    // 🌅 Fajr: Sunrise (Dawn)
    Fajr: `<i class="prayer-icon fas fa-sunrise"></i>`, 
    // ☀️ Dhuhr: Sun (Midday)
    Dhuhr: `<i class="prayer-icon fas fa-sun"></i>`, 
    // ⏳ Asr: Time/Clock (Mid-afternoon)
    Asr: `<i class="prayer-icon fas fa-clock"></i>`, 
    // 🌇 Maghrib: Sunset/Twilight
    Maghrib: `<i class="prayer-icon fas fa-cloud-sun"></i>`, 
    // 🌙 Isha: Night Crescent Moon 
    Isha: `<i class="prayer-icon fas fa-moon"></i>`
};


// =================================================================
// 1. 99 Names of Allah Carousel
// =================================================================

let currentNameIndex = 0;
let carouselInterval;
let isPlaying = true;
const carousel = document.getElementById('asma-ul-husna-carousel');
const playPauseBtn = document.getElementById('play-pause-btn');

function renderCarousel() {
    // Render all name items
    carousel.innerHTML = asmaUlHusna.map((name, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            <div class="name-arabic arabic-text">${name.ar}</div>
            <div class="name-translit">${index + 1}. ${name.translit}</div>
            <div class="name-meaning">"${name.meaning}"</div>
        </div>
    `).join('');
}

function showName(index) {
    const items = carousel.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
    currentNameIndex = index;
}

function nextName() {
    let nextIndex = (currentNameIndex + 1) % asmaUlHusna.length;
    showName(nextIndex);
}

function prevName() {
    let prevIndex = (currentNameIndex - 1 + asmaUlHusna.length) % asmaUlHusna.length;
    showName(prevIndex);
}

function toggleAutoRotate() {
    if (isPlaying) {
        clearInterval(carouselInterval);
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        carouselInterval = setInterval(nextName, 7000);
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

// Event Listeners for controls
document.getElementById('next-btn').addEventListener('click', () => {
    clearInterval(carouselInterval);
    nextName();
    if (isPlaying) carouselInterval = setInterval(nextName, 7000);
});
document.getElementById('prev-btn').addEventListener('click', () => {
    clearInterval(carouselInterval);
    prevName();
    if (isPlaying) carouselInterval = setInterval(nextName, 7000);
});
playPauseBtn.addEventListener('click', toggleAutoRotate);


// =================================================================
// 2. Hijri Date & Ramadan Countdown
// =================================================================

const HIJRI_UPDATE_INTERVAL = 3600000; // 1 hour

async function updateHijriAndRamadan() {
    try {
        // 2a. Fetch Hijri Date
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        const dateApiUrl = `https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`;
        const dateResponse = await fetch(dateApiUrl);
        const dateData = await dateResponse.json();

        if (dateData.data && dateData.data.hijri) {
            const hijri = dateData.data.hijri;
            const gregorian = dateData.data.gregorian;
            const hijriDateStr = `${hijri.day} ${hijri.month.en} ${hijri.year} AH`;
            const gregorianDateStr = `${gregorian.weekday.en}, ${gregorian.day} ${gregorian.month.en} ${gregorian.year} AD`;
            
            document.getElementById('hijri-date').textContent = hijriDateStr;
            document.getElementById('gregorian-date').textContent = gregorianDateStr;

            // 2b. Ramadan Countdown (Placeholder for demonstration - update annually)
            const nextRamadanStart = new Date('2026-03-01T00:00:00'); 
            const now = new Date();
            const timeDifference = nextRamadanStart - now;
            
            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                
                document.getElementById('ramadan-countdown').textContent = 
                    `${days} Days, ${hours} Hrs, ${minutes} Mins`;
            } else {
                document.getElementById('ramadan-countdown').textContent = 'Ramadan has started!';
            }
        }
    } catch (error) {
        console.error('Error fetching Hijri or Ramadan data:', error);
        document.getElementById('hijri-date').textContent = 'Error loading date.';
    }
}


// =================================================================
// 3. Contextual Du'a of the Day
// =================================================================

const contextualDuas = {
    MORNING: {
        title: "Morning Du'a (After Fajr)",
        ar: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
        translit: "Allahumma bika asbahna wa bika amsayna wa bika nahya wa bika namootu wa ilaykan nushoor.",
        meaning: "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, and by Your leave we live and die, and unto You is the resurrection."
    },
    EVENING: {
        title: "Evening Du'a (After Asr/Maghrib)",
        ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ",
        translit: "Amsaynā wa amsal-mulku lillāh wal-hamdu lillāh.",
        meaning: "We have reached the evening, and in the evening, all sovereignty belongs to Allah, and all praise is due to Allah."
    },
    GENERAL: {
        title: "General Du'a (For Guidance)",
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translit: "Rabbana atina fid dunya hasanatan wa fil akhirati hasanatan wa qina 'adhaban nar.",
        meaning: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire."
    }
};

function updateContextualDua() {
    const now = new Date();
    const hours = now.getHours();
    let dua;
    
    // Time check: Morning (4 AM to 12 PM)
    if (hours >= 4 && hours < 12) {
        dua = contextualDuas.MORNING;
    // Time check: Evening (4 PM to 8 PM)
    } else if (hours >= 16 && hours < 20) {
        dua = contextualDuas.EVENING;
    } else {
        dua = contextualDuas.GENERAL;
    }

    const duaContentEl = document.getElementById('dua-content');
    const duaCardTitleEl = document.querySelector('#dua-card h2');
    
    if (duaCardTitleEl) {
        duaCardTitleEl.textContent = `🤲 ${dua.title}`;
    }

    duaContentEl.innerHTML = `
        <p class="arabic-text">${dua.ar}</p>
        <p class="english-text" style="font-size: 1rem; color:#aaa; margin-top: 10px;">${dua.translit}</p>
        <p class="english-text" style="font-style: italic;">"${dua.meaning}"</p>
    `;
}


// =================================================================
// 4. Qibla Direction Indicator
// =================================================================

async function fetchQiblaDirection() {
    // Using Dhaka coordinates (23.8103, 90.4125) as a default if geolocation fails
    const defaultCoords = { latitude: 23.8103, longitude: 90.4125 }; 

    const coords = await new Promise(resolve => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position.coords),
                (error) => {
                    console.warn('Geolocation failed for Qibla:', error.message, 'Using default coordinates (Dhaka).');
                    resolve(defaultCoords);
                }
            );
        } else {
            console.warn('Geolocation not supported. Using default coordinates (Dhaka).');
            resolve(defaultCoords);
        }
    });

    try {
        const { latitude, longitude } = coords;
        const QIBLA_API_URL = `https://api.aladhan.com/v1/qibla/${latitude}/${longitude}`;
        
        const response = await fetch(QIBLA_API_URL);
        const data = await response.json();
        
        if (data.data && data.data.direction) {
            const angle = parseFloat(data.data.direction);
            
            document.getElementById('qibla-angle').textContent = angle.toFixed(2);
            document.getElementById('qibla-degrees').textContent = `${angle.toFixed(2)}°`;
            
        } else {
            document.getElementById('qibla-angle').textContent = 'N/A';
            document.getElementById('qibla-degrees').textContent = 'Error';
        }
    } catch (error) {
        console.error('Error fetching Qibla direction:', error);
        document.getElementById('qibla-angle').textContent = 'Error';
    }
}


// =================================================================
// 5. Prayer Times & Dynamic Background Theme
// =================================================================

const PRAYER_API_URL = 'https://api.aladhan.com/v1/timings';
const PRAYER_NAMES_API = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']; // API keys may differ slightly
const PRAYER_NAMES_DISPLAY = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']; // For highlighting/display

/**
 * Determines the next prayer time based on the current time.
 */
function getNextPrayer() {
    const now = new Date();
    const currentTimeMs = now.getTime();
    let nextPrayer = { name: null, time: null, countdownMs: Infinity };
    let foundNext = false;
    
    const prayerTimeObjects = PRAYER_NAMES_DISPLAY.map((name, index) => {
        const timeStr = prayerTimesToday[PRAYER_NAMES_API[index]]; 
        if (!timeStr) return null;
        
        const [hours, minutes] = timeStr.split(':').map(Number);
        const prayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
        return { name, time: prayerDate };
    }).filter(p => p !== null);

    // 1. Check for next prayer today
    for (const { name, time } of prayerTimeObjects) {
        const timeMs = time.getTime();
        const countdownMs = timeMs - currentTimeMs;

        if (countdownMs > 0 && countdownMs < nextPrayer.countdownMs) {
            nextPrayer = { name, time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }), countdownMs };
            foundNext = true;
        }
    }

    // 2. If all prayers are passed, the next is Fajr tomorrow
    if (!foundNext && prayerTimeObjects.length > 0) {
        const fajrTimeObject = prayerTimeObjects.find(p => p.name === 'Fajr');
        if (fajrTimeObject) {
            const fajrTomorrow = new Date(fajrTimeObject.time);
            fajrTomorrow.setDate(fajrTomorrow.getDate() + 1);

            const countdownMs = fajrTomorrow.getTime() - currentTimeMs;
            nextPrayer = { 
                name: 'Fajr', 
                time: prayerTimesToday.Fajr, // Using the stored Fajr time for display
                countdownMs 
            };
        }
    }
    
    return nextPrayer;
}

/**
 * Applies a theme class to the body based on the next upcoming prayer.
 */
function applyPrayerTheme(nextPrayerName) {
    const body = document.body;
    
    body.className = ''; 

    let themeClass = '';

    switch (nextPrayerName) {
        case 'Fajr':
            themeClass = 'theme-fajr';
            break;
        case 'Maghrib':
            themeClass = 'theme-maghrib';
            break;
        case 'Isha':
            themeClass = 'theme-isha';
            break;
        default:
            // Dhuhr/Asr use the default dark theme
            break;
    }

    if (themeClass) {
        body.classList.add(themeClass);
    }
}

/**
 * Updates the countdown timer and highlights the next prayer.
 */
function updateNextPrayerCountdown() {
    const { name, countdownMs } = getNextPrayer();
    const nextPrayerNameEl = document.getElementById('next-prayer-name');
    const nextPrayerCountdownEl = document.getElementById('next-prayer-countdown');
    const prayerTimeItems = document.querySelectorAll('.prayer-time-item');

    prayerTimeItems.forEach(item => {
        item.classList.remove('next');
        if (item.dataset.name === name) {
            item.classList.add('next');
        }
    });

    if (name) {
        nextPrayerNameEl.textContent = name;
        
        const totalSeconds = Math.floor(countdownMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        nextPrayerCountdownEl.textContent = 
            `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
            
        // APPLY DYNAMIC THEME 
        applyPrayerTheme(name); 

    } else {
        nextPrayerNameEl.textContent = '...';
        nextPrayerCountdownEl.textContent = 'Loading...';
        applyPrayerTheme(null); 
    }
}


function renderPrayerTimes() {
    const listEl = document.getElementById('prayer-times-list');
    listEl.innerHTML = PRAYER_NAMES_DISPLAY.map((name, index) => `
        <div class="prayer-time-item" data-name="${name}">
            ${prayerIcons[name]}
            <div class="prayer-name">${name}</div>
            <div class="prayer-time">${prayerTimesToday[PRAYER_NAMES_API[index]] || '--:--'}</div>
        </div>
    `).join('');
    
    updateNextPrayerCountdown(); 
}

/**
 * Fetches prayer times based on user geolocation.
 */
async function fetchPrayerTimes() {
    const defaultCoords = { latitude: 23.8103, longitude: 90.4125 }; // Dhaka, Bangladesh

    const coords = await new Promise(resolve => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position.coords),
                (error) => {
                    console.warn('Geolocation failed:', error.message, 'Using default coordinates (Dhaka).');
                    resolve(defaultCoords);
                }
            );
        } else {
            console.warn('Geolocation not supported. Using default coordinates (Dhaka).');
            resolve(defaultCoords);
        }
    });

    try {
        const { latitude, longitude } = coords;
        const date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        
        // Method 7 (Karachi) for South Asia
        const url = `${PRAYER_API_URL}/${today}?latitude=${latitude}&longitude=${longitude}&method=7&school=1`; 
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.data && data.data.timings) {
            const timings = data.data.timings;
            
            // Clean up times and store (Using API names as keys)
            prayerTimesToday.Fajr = timings.Fajr.split(' ')[0]; 
            prayerTimesToday.Dhuhr = timings.Dhuhr.split(' ')[0];
            prayerTimesToday.Asr = timings.Asr.split(' ')[0];
            prayerTimesToday.Maghrib = timings.Maghrib.split(' ')[0];
            prayerTimesToday.Isha = timings.Isha.split(' ')[0];
            
            renderPrayerTimes(); 
        } else {
            console.error('Aladhan API Error:', data.data);
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
}


// =================================================================
// Initialization
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Carousel
    renderCarousel();
    carouselInterval = setInterval(nextName, 7000); // Start the rotation
    
    // 2. Date/Countdown
    updateHijriAndRamadan();
    setInterval(updateHijriAndRamadan, HIJRI_UPDATE_INTERVAL);
    
    // 3. Du'a
    updateContextualDua();
    setInterval(updateContextualDua, 3600000); // Hourly check
    
    // 4. Qibla
    fetchQiblaDirection();

    // 5. Prayer Times
    fetchPrayerTimes();
    setInterval(updateNextPrayerCountdown, 1000); // 1-second countdown update
});