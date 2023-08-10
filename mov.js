function movieSearch() {
    movie = movie.value
    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=e57c2b8c`).then(data => data.json()).then(movie => displayMovie(movie))
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
        rate=arrayMovie.imdbRating
        if(arrayMovie.Response=="False"||title=="Undefined"){
            alert("Movie not found")}
        else{
           
            result.innerHTML = `<div class="col-md-4"><h2 class="mt-3 mb-3">${title}</h2><img src="${poster}" alt=""></div>
            <div class="col-md-8 mt-5"><p><span>Summary: </span>${plot}</p> <p><span>Director: </span>${dir}</p><p><span>Writer:</span>${writer}</p>
             <p><span>Genre: </span>${genre}</p><p><span>IMDB Rating: </span>${rate}</p></div>`
        }
        }
      

    }
