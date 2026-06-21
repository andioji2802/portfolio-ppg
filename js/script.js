/**
 * E-Portfolio PPG Prajabatan - Andi Khozin Mubarak
 * Full Script with TikTok-Inspired Micro-Animations & Scroll Reveals
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. INTEGRASI OTOMATIS CLASS ANIMASI (TIKTOK STYLE)
    // ==========================================================================
    // Menyuntikkan kelas animasi ke elemen HTML utama secara otomatis agar HTML tetap rapi.
    
    // Hero Area Entry Animation Direction
    const avatarArea = document.querySelector('.hero-avatar-area');
    const textArea = document.querySelector('.hero-text-area');
    if (avatarArea) avatarArea.classList.add('animate-on-scroll', 'fade-in-left');
    if (textArea) textArea.classList.add('animate-on-scroll', 'fade-in-right');
    
    // Semua Section Headers
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in-up');
    });

    // Profile & Bio Grid
    const profileBio = document.querySelector('.profile-bio');
    const profileValues = document.querySelector('.profile-values');
    if (profileBio) profileBio.classList.add('animate-on-scroll', 'fade-in-left');
    if (profileValues) profileValues.classList.add('animate-on-scroll', 'fade-in-right');

    // Grid Konten yang akan muncul bergantian satu-per-satu (Staggered Grid Entry)
    const staggerContainers = [
        '.cycles-container', 
        '.gallery-grid', 
        '.teori-grid', 
        '.timeline-vertical', 
        '.competency-grid', 
        '.evaluation-grid'
    ];

    staggerContainers.forEach(containerSelector => {
        const container = document.querySelector(containerSelector);
        if (container) {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.classList.add('animate-on-scroll', 'fade-in-up');
                // Mengatur delay bertingkat maksimal hingga 4 tingkatan loop agar tidak terlalu lama
                const staggerIndex = (index % 4) + 1;
                child.classList.add(`stagger-${staggerIndex}`);
            });
        }
    });


    // ==========================================================================
    // 2. INTERSECTION OBSERVER LOGIC (SCROLL TRIGGER)
    // ==========================================================================
    // Berfungsi mengaktifkan efek ketika elemen mulai terlihat di layar saat di-scroll.
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas untuk memicu CSS Animation
                entry.target.classList.add('appear');
                
                // Kasus Spesial: Mengisi Nilai Progress Bar Secara Live saat Card Penilaian Dilihat
                if (entry.target.classList.contains('eval-card')) {
                    const bars = entry.target.querySelectorAll('.progress-fill');
                    bars.forEach(bar => {
                        // Mengambil nilai target persentase teks asli dari elemen di atasnya
                        const labelSpan = bar.parentElement.previousElementSibling?.querySelector('span:last-child');
                        if (labelSpan) {
                            const targetWidth = labelSpan.textContent.trim();
                            bar.style.width = targetWidth;
                        }
                    });
                }
                
                // Unobserve agar animasi hanya berjalan 1 kali ketika scroll pertama
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12, // Aktif jika minimal 12% bagian objek masuk dalam viewport layar
        rootMargin: "0px 0px -40px 0px"
    });

    // Daftarkan semua elemen animasi & card penilaian ke dalam target pemantauan
    document.querySelectorAll('.animate-on-scroll, .eval-card').forEach(el => {
        animationObserver.observe(el);
    });


    // ==========================================================================
    // 3. DARK MODE TOGGLE (BAWAAN)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    if (themeToggleBtn && themeIcon) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }


    // ==========================================================================
    // 4. STICKY & SHRINK NAVBAR EFFECT (BAWAAN)
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('shrink');
            } else {
                navbar.classList.remove('shrink');
            }
        }
    });


    // ==========================================================================
    // 5. MOBILE MENU TOGGLE & NAVIGATION LINK ACTIVE STATE (BAWAAN)
    // ==========================================================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-item');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.setAttribute('aria-controls', 'navLinks');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');

        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            const menuIcon = mobileMenuBtn.querySelector('i');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));

            if (isOpen) {
                menuIcon.classList.replace('fa-bars', 'fa-times');
            } else {
                menuIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Tambahkan penunjuk warna untuk setiap nilai persentase di evaluasi
    document.querySelectorAll('.progress-labels span:last-child').forEach(score => {
        const value = parseInt(score.textContent.replace('%', ''), 10);
        if (Number.isFinite(value)) {
            if (value >= 95) {
                score.classList.add('progress-score-high');
            } else if (value >= 90) {
                score.classList.add('progress-score-medium');
            } else {
                score.classList.add('progress-score-low');
            }
        }
    });

    // Tutup menu mobile ketika link navigasi diklik
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks && mobileMenuBtn) {
                navLinks.classList.remove('open');
                mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // Menandai Menu Navigasi Sesuai Posisi Section Layar (Scrollspy)
    const sections = document.querySelectorAll('section, footer');
    window.addEventListener('scroll', () => {
        let currentSectionId = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });


    // ==========================================================================
    // 6. GALLERY ISOTOPE-LIKE FILTER LOGIC (BAWAAN)
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });


    // ==========================================================================
    // 7. ARTEFAK DETAILS POPUP / MODAL (BAWAAN)
    // ==========================================================================
    const modal = document.getElementById('artefakModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    const mTitle = document.getElementById('mTitle');
    const mContext = document.getElementById('mContext');
    const mGoals = document.getElementById('mGoals');
    const mTheory = document.getElementById('mTheory');
    const mPros = document.getElementById('mPros');
    const mCons = document.getElementById('mCons');
    const mReflection = document.getElementById('mReflection');

    if (modal && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            const viewDetailsBtn = item.querySelector('.view-details');
            
            if (viewDetailsBtn) {
                viewDetailsBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Cegah event bubble ke parent
                    
                    if (mTitle) mTitle.textContent = item.getAttribute('data-title') || 'Judul Artefak';
                    if (mContext) mContext.textContent = item.getAttribute('data-context') || '-';
                    if (mGoals) mGoals.textContent = item.getAttribute('data-goals') || '-';
                    if (mTheory) mTheory.textContent = item.getAttribute('data-theory') || '-';
                    if (mPros) mPros.textContent = item.getAttribute('data-pros') || '-';
                    if (mCons) mCons.textContent = item.getAttribute('data-cons') || '-';
                    if (mReflection) mReflection.textContent = item.getAttribute('data-reflection') || '-';

                    modal.classList.add('open');
                    document.body.style.overflow = 'hidden'; // Mengunci scroll body belakang
                });
            }
            
            // Cegah bubbling dari link PDF/Video
            const pdfLinks = item.querySelectorAll('.view-pdf-link');
            pdfLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            });
        });

        const closeModal = () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; // Mengembalikan scroll body
        };

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
    }


    // ==========================================================================
    // 8. BACK TO TOP BUTTON LOGIC (BAWAAN)
    // ==========================================================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});