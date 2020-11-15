import axios from 'axios';
// import genres from '../data/MovieGenres'

export const SearchForMovie = (searchTerm) => async (dispatch) => {
    //here turn on loader
    let url = `http://localhost:4000/movies?limit=12&&sortOrder=asc&search=${searchTerm}&searchBy=title`
    // if (genreFilter !== genres.ALL) {
    //     url = url + `&filter=${genreFilter}`;
    // }
    axios.get(url)
        .then(response => {
            console.log(response.data);
            //dispatch load users
        })
        .catch(error => {
            console.log(error.message);
        });
}