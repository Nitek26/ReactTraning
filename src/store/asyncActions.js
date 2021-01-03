import axios from 'axios';
import genres from '../data/MovieGenres'
import { LoadMovies, EditMovie, AddMovie, DeleteMovie } from './actions.js'

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
            console.log('SearchForMovie API error: ' + error.message);
        });
}

export const EditMovieAsync = (movie) => async (dispatch) => {
    let url = `http://localhost:4000/movies/`;
    axios.put(url, movie)
        .then(response => {
            console.log('EditMovie response: ' + response.data);
            dispatch(EditMovie(movie));
        })
        .catch(error => {
            console.log('EditMovie API error: ' + error.message);
        });
}

export const DeleteMovieAsync = (id) => async (dispatch) => {
    let url = `http://localhost:4000/movies/${id}`;
    axios.delete(url)
        .then(response => {
            console.log('DeleteMovie response: ' + response.data);
            dispatch(DeleteMovie(id));
        })
        .catch(error => {
            console.log('DeleteMovie API error: ' + error.message);
        });
}

export const AddMovieAsync = (movie) => async (dispatch) => {
    let url = `http://localhost:4000/movies/`;
    axios.post(url, movie)
        .then(response => {
            console.log('AddMovie response: ' + response.data);
            dispatch(AddMovie(response.data));
        })
        .catch(error => {
            console.log('AddMovie API error: ' + error.message);
        });
}


