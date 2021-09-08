const API_KEY = 'ca8f1472d8d6de7f6f2e9fa60e1a3e5d'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'
const LIST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial moives
getMovies(LIST_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    const mainEl = document.getElementById('main')
    mainEl.innerHTML = '';

    movies.forEach(movie => {
        const title = movie.original_title
        const average = movie.vote_average
        const imgPath = movie.backdrop_path
        const overview = movie.overview

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img
        src="${IMG_PATH + imgPath}"
        alt="movie">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByAverage(average)}">${average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `
        mainEl.appendChild(movieEl);

    })
}

function getClassByAverage (average) {
    if (average >= 8) {
        return 'lightgreen'
    } else if (average >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = ''
    } else {
        window.location.reload()
    }
})