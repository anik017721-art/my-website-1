// Sample movie data (in a real app, this would come from an API)
const movies = {
    trending: [
        { id: 1, title: 'Dune: Part Two', image: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dnulOEJjANeOpij.jpg', year: 2024, rating: 8.8, genre: 'Sci-Fi' },
        { id: 2, title: 'Oppenheimer', image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', year: 2023, rating: 8.5, genre: 'Drama' },
        { id: 3, title: 'The Batman', image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg', year: 2022, rating: 7.9, genre: 'Action' },
        { id: 4, title: 'Top Gun: Maverick', image: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', year: 2022, rating: 8.3, genre: 'Action' },
        { id: 5, title: 'Spider-Man: No Way Home', image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', year: 2021, rating: 8.0, genre: 'Action' },
        { id: 6, title: 'Interstellar', image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', year: 2014, rating: 8.7, genre: 'Sci-Fi' },
    ],
    popular: [
        { id: 7, title: 'Inception', image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', year: 2010, rating: 8.4, genre: 'Sci-Fi' },
        { id: 8, title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', year: 2008, rating: 8.5, genre: 'Action' },
        { id: 9, title: 'Pulp Fiction', image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', year: 1994, rating: 8.5, genre: 'Crime' },
        { id: 10, title: 'The Shawshank Redemption', image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', year: 1994, rating: 8.7, genre: 'Drama' },
        { id: 11, title: 'The Godfather', image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', year: 1972, rating: 8.7, genre: 'Crime' },
        { id: 12, title: 'The Lord of the Rings: The Return of the King', image: 'https://image.tmdb.org/t/p/w500/rCzpD3bwMqOeMox0H3oMjj9QYSp.jpg', year: 2003, rating: 8.5, genre: 'Adventure' },
    ],
    tvShows: [
        { id: 13, title: 'Stranger Things', image: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb1IP2GnKn96pnhKl.jpg', year: 2016, rating: 8.6, genre: 'Drama' },
        { id: 14, title: 'Breaking Bad', image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', year: 2008, rating: 8.9, genre: 'Crime' },
        { id: 15, title: 'Game of Thrones', image: 'https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg', year: 2011, rating: 8.4, genre: 'Fantasy' },
        { id: 16, title: 'The Mandalorian', image: 'https://image.tmdb.org/t/p/w500/eU1i6eHJBbTjIvg4TNMjPYm686R.jpg', year: 2019, rating: 8.5, genre: 'Sci-Fi' },
        { id: 17, title: 'The Witcher', image: 'https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg', year: 2019, rating: 8.2, genre: 'Fantasy' },
        { id: 18, title: 'The Last of Us', image: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', year: 2023, rating: 8.8, genre: 'Drama' },
    ]
};

// DOM Elements
const trendingGrid = document.querySelector('#trending .movie-grid');
const popularGrid = document.querySelector('#popular .movie-grid');
const tvShowsGrid = document.querySelector('#tv-shows .movie-grid');
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.querySelector('.search-box input');
const heroSection = document.querySelector('.hero');

// Create movie card element
// Update the createMovieCard function in script.js
function createMovieCard(movie) {
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <div class="movie-details">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">
                            <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                            <span class="year">${movie.year}</span>
                            <span class="duration">${movie.duration || '2h 30m'}</span>
                            <span class="quality">${movie.quality || 'HD'}</span>
                        </div>
                        <p class="genre">${movie.genre}</p>
                        <p class="description">${movie.description || 'An exciting movie that will keep you on the edge of your seat.'}</p>
                        <div class="movie-actions">
                            <button class="btn btn-play-sm" title="Play"><i class="fas fa-play"></i></button>
                            <button class="btn btn-icon" title="Add to list"><i class="fas fa-plus"></i></button>
                            <button class="btn btn-icon" title="More info"><i class="fas fa-info-circle"></i></button>
                        </div>
                        <div class="movie-cast">
                            <span>Cast: ${movie.cast || 'Popular actors'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span class="year">${movie.year}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        </div>
    `;
}


// Populate movie grids
function populateMovieGrids() {
    // Clear existing content
    trendingGrid.innerHTML = '';
    popularGrid.innerHTML = '';
    tvShowsGrid.innerHTML = '';

    // Add movies to trending grid
    movies.trending.forEach(movie => {
        trendingGrid.innerHTML += createMovieCard(movie);
    });
       // Toggle genres menu on mobile
    const genresDropdown = document.querySelector('.genres-dropdown');
    if (genresDropdown) {
        const genresLink = genresDropdown.querySelector('.nav-link');
        
        genresLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) { // Mobile view
                e.preventDefault();
                genresDropdown.classList.toggle('active');
            }
        });
    }
    
    // Close genres menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.genres-dropdown') && window.innerWidth <= 992) {
            genresDropdown?.classList.remove('active');
        }
    });
};


    // Add movies to popular grid
    {movies.popular.forEach(movie => {
        popularGrid.innerHTML += createMovieCard(movie);
    });

    // Add TV shows to TV shows grid
    movies.tvShows.forEach(show => {
        tvShowsGrid.innerHTML += createMovieCard(show);
    });
}

// Toggle mobile menu
function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking outside
function closeMenuOnClickOutside(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Toggle header background on scroll
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Search functionality
function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            // In a real app, you would make an API call to search
            console.log('Searching for:', query);
        }
    });
}

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });
});

// Initialize the app
function init() {
    // Populate movie grids
    populateMovieGrids();
    
    // Set up event listeners
    menuToggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
    window.addEventListener('scroll', handleScroll);
    setupSearch();
    
    // Add click event to movie cards
    document.addEventListener('click', (e) => {
        const movieCard = e.target.closest('.movie-card');
        if (movieCard) {
            const movieId = movieCard.dataset.id;
            // In a real app, you would navigate to the movie detail page or show a modal
            console.log(`Movie ID: ${movieId} clicked`);
        }
    });
    
    // Play button functionality in hero section
    const playBtn = document.querySelector('.btn-play');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            // In a real app, this would start playing the featured content
            console.log('Starting playback...');
        });
    }
    
    // Add to list button functionality
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-icon') && e.target.closest('.btn-icon').querySelector('.fa-plus')) {
            const btn = e.target.closest('.btn-icon');
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.title = 'Added to list';
            // In a real app, you would add this to the user's watchlist
            console.log('Added to watchlist');
        }
    });
    
    // Set hero section background
    const heroBackgrounds = [
        'https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg',
        'https://image.tmdb.org/t/p/original/8YFL5QQVp1sFC8Jaag0YZfQ2Qpu.jpg',
        'https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
        'https://image.tmdb.org/t/p/original/1L4YOxTnkGhqtuWYTsnbU7KBNjm.jpg'
    ];
    
    const randomBg = heroBackgrounds[Math.floor(Math.random() * heroBackgrounds.length)];
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${randomBg}')`;
    
    // Add animation to elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.movie-card, .section-header');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded'), function()
    // Existing code...