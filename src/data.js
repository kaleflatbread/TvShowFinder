// require("es6-promise").polyfill();
// require("isomorphic-fetch");

// let showObj = { shows: [] };
// const URL = "https://api.tvmaze.com/shows?page=";

// getShows = i => {
//   return fetch(URL + i)
//     .then(res => res.json())
//     .then(data => {
//       const filteredData = data.filter(show => {
//         return (
//           show.language &&
//           show.language.toLowerCase() === "english" &&
//           show.genres.length > 0 &&
//           show.rating.average > 4
//         );
//       });
//       showObj.shows = showObj.shows.concat(filteredData);
//     });
// };

// function waitForShows(i = 0) {
//   if (i < 152) {
//     getShows(i).then(() => waitForShows(i + 1));
//     console.log(showObj);
//   } else {
//     var fs = require("fs");
//     fs.writeFileSync("showsData.json", JSON.stringify(showObj.shows));
//   }
// }

// waitForShows();
