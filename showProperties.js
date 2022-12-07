const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let [key, value] of Object.entries(obj)) {
       if (typeof(value) === 'string') {
           console.log (key, value);
       }
    }
}

function showProperties2(obj) {
    for (let key in obj) {
        if ( typeof obj[key] === 'string') {
            console.log (key, obj[key]);
        }
    }
}
showProperties2(movie);