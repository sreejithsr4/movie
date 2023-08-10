function movieSearch() {
    movie = movie.value
    fetch(`http://www.omdbapi.com/?apikey=222e9039&t=${movie}`).then(data => data.json()).then(movie => displayMovie(movie))
    function displayMovie(arrayMovie) {
        console.log(arrayMovie);
        title = arrayMovie.Title
        poster = arrayMovie.Poster
        plot=arrayMovie.Plot
        date = arrayMovie.Released
        genre=arrayMovie.Genre
        dir=arrayMovie.Director
        act=arrayMovie.Actors
        writer=arrayMovie.Writer
        result.innerHTML = `<div class="col-md-4"><h2>${title}</h2><img src="${poster}" alt=""></div>
        <div class="col-md-8 mt-5"><p>Summary:${plot}</p> <p>Director:${dir}</p><p>Writer:${writer}</p>
        <p>Actors:${act}</p><p>Released Date:${date}</p>
        <p>Genre:${genre}</p></div>`

    }
}
