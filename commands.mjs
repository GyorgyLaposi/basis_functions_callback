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

/* function getMax(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max) === 1) {
      max = arr[i];
    }
    i++;
  }
  return max;
} */

// simplify getMax V.
/** COMPARE
 * compare (a,b)
 * if a > b ret positive number
 * if b > a ret negative number
 * if a === b ret 0
 */

function getMax(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max) > 0) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

// Min search general function II
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

// Generalization III search by parameters
//egy adott tömb bármely kulcsának az értékét adja vissza, ha a megadott és a kulcs érték ugyanaz.
function searchByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
}

//Generalization IV search by condition
// a fentinél álltaláosabb
function search(arr, condition) {
  for (const item of arr) {
    // for of ciklussal bejárjuk a tömböt
    if (condition(item)) {
      return item;
    }
  }
  // optional ha egyik elemre sem igaz a feltétel
  return null;
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

/* function compareByGenres(album1, album2) {
  const n1 = album1.genres.length;
  const n2 = album2.genres.length;

  if (n1 > n2) {
    return 1; 
  } else if (n2 > n1) {
    return -1;
  }

  return 0; 
}*/

// simplify compareByGenres V.

function compareByGenres(album1, album2) {
  const n1 = album1.genres.length;
  const n2 = album2.genres.length;
  return n1 - n2;
}

export function getAlbumWithMostOfGenres(albums) {
  const mostOfGenres = getMax(albums, compareByGenres); // az V. módosítás már csak a compareByGenrest érintette!
  console.log("Most of genre IV", mostOfGenres.title);
}

// MOST SALE GENERALIZATION III
/* export function getAlbumWithMostOfSale(albums) {
  let mostOfSale = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sale > mostOfSale.sale) {
      mostOfSale = albums[i];
    }
  }
  console.log("Most of sale III", mostOfSale.title);  
} */

// simplify compareBySale
function compareBySale(a1, a2) {
  return a1.sale - a2.sale;
}

// MOST SALE GENERALIZATION IV - V.
/* export function getAlbumWithMostOfSale(albums) {
  const mostOfSale = getMax(albums, compareBySale);
  console.log("Most of sale IV-V", mostOfSale.title);
} */

// MOST SALE GENERALIZATION VI
export function getAlbumWithMostOfSale(albums) {
  const mostOfSale = getMax(albums, function (a1, a2) {
    // nameless inline function
    return a1.sale - a2.sale;
  });
  console.log("Most of sale VI", mostOfSale.title);
}

//MIN GENRE GENERALIZATION III
/* export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = albums[i];
    }
  }
  console.log("Fewest genre III", minOfGenres.title);
} */

//MIN GENRE GENERALIZATION IV-V.
export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = getMin(albums, compareByGenres);
  console.log("Fewest genre IV-V", minOfGenres.title);
}

// search album by year GENERALIZATION III
/* export function getAlbumWithYearOf(albums, year) {
  const album = getByKeyValue(albums, "year", year);
  console.log("By year", album.title);
} */

// search album by year GENERALIZATION IV
/* export function getAlbumWithYearOf(albums, byYear) {
  function yearCondition(album){ 
    return album.year === byYear;  
  }
  const album = search(albums,yearCondition);
  console.log("By year IV", album.title);
} */

// search album by year GENERALIZATION V
export function getAlbumWithYearOf(albums, byYear) {
  const album = search(albums, function (album) {
    // nameless inline function
    return album.year === byYear;
  });
  console.log("By year V", album.title);
}

// search album by artist GENERALIZATION III
/* export function getAlbumWithArtistName(albums, artist) {
  const album = getByKeyValue(albums, "artist", artist);
  console.log("By artist", album.title);
} */

// search album by artist GENERALIZATION IV
export function getAlbumWithArtistName(albums, artist) {
  const album = search(albums, function (album) {
    return album.artist === artist;
  });
  console.log("By artist IV", album.title);
}

// search album by title GENERALIZATION III
/* export function getAlbumByTitle(albums, title) {
  const album = getByKeyValue(albums, "title", title);
  console.log("By title", album.title);
} */

// search album by title GENERALIZATION IV
export function getAlbumByTitle(albums, title) {
  const album = search(albums,function (album){
    return album.title === title;
  });
  console.log("By title IV", album.title);
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
