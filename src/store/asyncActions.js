import axios from 'axios';
import genres from '../data/MovieGenres'
import { LoadMovies } from './actions.js'

export const SearchForMovie = (searchTerm, genreFilter, orderByVal) => async (dispatch) => {
    let url = `http://localhost:4000/movies?limit=100&sortBy=${orderByVal}&sortOrder=desc`
    if (genreFilter && genreFilter !== genres.ALL) {
        url = url + `&filter=${genreFilter}`;
    }

    if (searchTerm && searchTerm !== "") {
        url += `&search=${searchTerm}&searchBy=title`;
    }

    axios.get(url)
        .then(response => {
            dispatch(LoadMovies(response.data));
        })
        .catch(error => {
            console.log('error: ' + error.message);
        });
}