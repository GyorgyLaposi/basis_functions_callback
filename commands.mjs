// MAX search general function I
/* function getMax(arr) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (arr[i] > max) {/* csak akkor működik, ha az átadott tömb primitívekből (strings, numbers) áll!!
     objectet nem lehet így összehasonlítani 
      max = arr[i];
    }
    i++
  }
  return max; 
}*/

// MAX search general II

/** COMPARE
 * compare (a,b)
 * if a > b ret 1
 * if b > a ret -1
 * if a === b ret 0
 */

function getMax(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max) === 1) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

function getMin(arr, compare) {
  let min = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], min) < 0) {
      min = arr[i];
    }
    i++;
  }

  return min;
}

// condition(album) ---> true/false
function search(arr, condition) {}

function searchByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
}

// ÁLTALÁNOSÍTÁS III a for ciklusokat általánosítjuk, hogy ne kelljen konkrét kulcs érték párt összehhasonlítani

function getByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
      // itt lehetne dinamikus szöveg: console.log(`By ${key}`,arr[i]); DE EBBEN AZ EETBEN CSAK KIIRATNI TUDOM? MÁST NEM ==> KORLÁTOZ
    }
  }
}

// MAX GENRE GENERALIZATION III
/* export function getAlbumWithMostOfGenres(albums) {
  let mostOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length > mostOfGenres.genres.length) {
      mostOfGenres = albums[i];
    }
  }
  console.log("Most of genre III", mostOfGenres.title);
} */

// MAX GENRE GENERALIZATION IV

function compareByGenres(album1, album2) {
  const n1 = album1.genres.lenth;
  const n2 = album2.genres.length;

  if (n1 > n2) {
    return 1; 
  } else if (n2 > n1) {
    return -1;
  }

  return 0;
}

export function getAlbumWithMostOfGenres(albums) {
  const mostOfGenres = getMax(albums, compareByGenres);
  console.log("Most of genre IV", mostOfGenres.title);
}

// MOST SALE GENERALIZATION III
export function getAlbumWithMostOfSale(albums) {
  let mostOfSale = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sale > mostOfSale.sale) {
      mostOfSale = albums[i];
    }
  }
  console.log("Most of sale III", mostOfSale.title);
}

//MIN GENRE GENERALIZATION III
export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = albums[i];
    }
  }
  console.log("Fewest genre III", minOfGenres.title);
}

// search album by year GENERALIZATION III
export function getAlbumWithYearOf(albums, year) {
  const album = getByKeyValue(albums, "year", year);
  console.log("By year", album.title);
}

// search album by artist GENERALIZATION III
export function getAlbumWithArtistName(albums, artist) {
  const album = getByKeyValue(albums, "artist", artist);
  console.log("By artist", album.title);
}

// search album by title GENERALIZATION III
export function getAlbumByTitle(albums, title) {
  const album = getByKeyValue(albums, "title", title);
  console.log("By title", album.title);
}

// search album by byGenre GENERALIZATION II (can't use getByKeyValue too specific!)
export function getAlbumByGenre(albums, byGenre) {
  let found = false;
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].genres.length; j++) {
      if (albums[i].genres[j] === byGenre) {
        console.log("By genre", albums[i].title);
        found = true;
        break;
      }
    }
    if (found === true) {
      break;
    }
  }
}
