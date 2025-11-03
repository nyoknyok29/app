// Folder: daily/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200, // Durasi animasi 1.2 detik
        once: true,    // Hanya animasikan saat pertama kali muncul di viewport
        easing: 'ease-in-out',
    });

    // 2. Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Function to open/close menu
    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        // Change icon from bars to times (X)
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-times');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Function to close the mobile menu (for internal links)
    window.closeMenu = () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    };
    
    // 3. Dynamic Daily Verse (Simulated)
    // Dalam aplikasi nyata, data ini akan diambil dari API atau database.
    const verseData = [
        { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
        { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
        { text: "The Lord is my shepherd, I shall not want.", ref: "Psalm 23:1" }
    ];

    const verseTextElement = document.getElementById('dailyVerseText');
    const verseRefElement = document.getElementById('dailyVerseRef');
    
    // Simple logic to select a "daily" verse based on the day of the year (or just one for simplicity)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const todayVerse = verseData[dayOfYear % verseData.length]; // Cycle through the small array

    if (verseTextElement && verseRefElement) {
        verseTextElement.textContent = `"${todayVerse.text}"`;
        verseRefElement.textContent = `– ${todayVerse.ref} (KJV)`; // Added KJV as a common English version
    }

});