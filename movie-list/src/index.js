import fetchApi from './fetching.js'

const form = document.getElementById('search-form')
const movieSearch = document.querySelector('.movie-search')
const moviesDiv = document.querySelector('.movies')

form.addEventListener('submit', e => e.preventDefault())

movieSearch.addEventListener('keyup', e => {
    const search = e.target.value
    fetchApi({
        search,
        printIn: moviesDiv
    })
})