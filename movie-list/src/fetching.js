/* GET YOUR API AT http://www.omdbapi.com/apikey.aspx */
const API_KEY = '275405d5'




const upperFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)


const defaultMoviePoster = 'https://artgalleryofballarat.com.au/wp-content/uploads/2020/06/placeholder-image.png'

const noResultsText = `
    <div class="message-404">
        <h2>No se encontraron resultados</h2>
        <p>Verifica tu búsqueda e inténtalo de nuevo</p>
    </div>
`

const singleMovieHtml = movie => `
    <div class="single-movie">
        <a href="https://google.com/search?q=${movie.Title}" target="_blank">
            <img class="movie-img" 
            src="${movie.Poster !== 'N/A' ? movie.Poster : defaultMoviePoster}" 
            alt="Poster ${movie.Title}" 
            />
        </a>
        
        <h2 class="movie-title">${movie.Title}</h2>
        <p class="movie-year">Year: ${movie.Year}</p>
        <p class="movie-category">Category: ${upperFirstLetter(movie.Type)}</p>
    </div>
`
const singleMovie = movieList => movieList.map( movie => singleMovieHtml(movie) )

const addMovieToTheList = (searchResults, movieList) => searchResults.map(movie => movieList.push(movie))





const fetchApi = async ({ search, printIn }) => {

    const api = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`

    const response = await fetch(api, {
        method: 'get',
        Accept: 'application/json'
    })
    const data = await response.json()
    const searchResults = data.Search
    
    const movieList = []

    if (searchResults != undefined) {
        addMovieToTheList(searchResults, movieList)
    }

    if (movieList.length > 0) {
        printIn.innerHTML = singleMovie(movieList)
    } else {
        printIn.innerHTML = noResultsText
    }

    
    if (search == '') {
        printIn.innerHTML = ''
    }
    
}

export default fetchApi