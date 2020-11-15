import axios from 'axios';
import genres from '../data/MovieGenres'

export const SearchForMovie = (searchTerm, genreFilter, orderByVal) => async (dispatch) => {
    //here turn on loader
    console.log("Api call!");
    let url = `http://localhost:4000/movies?limit=12&sortBy=${orderByVal}&sortOrder=asc`
    if (genreFilter && genreFilter !== genres.ALL) {
        url = url + `&filter=${genreFilter}`;
    }

    if (searchTerm && searchTerm !== "") {
        url += `&search=${searchTerm}&searchBy=title`;
    }

    console.log('url: ' + url);

    axios.get(url)
        .then(response => {
            console.log('Response: ' + JSON.stringify(response.data));
            //dispatch load users
        })
        .catch(error => {
            console.log('error: ' + error.message);
        });
}