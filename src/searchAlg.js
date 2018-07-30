export default function isEqual(currentShow, show) {
  var arrayA = currentShow.genres.sort();
  var arrayB = show.genres.sort();

  var matches = 0;
  for (var x = 0; x < arrayA.length; x++) {
    if (arrayB.indexOf(arrayA[x]) != -1) matches++;
  }
  if (
    matches === show.genres.length &&
    show.rating.average > 7 &&
    show.id !== currentShow.id
  ) {
    return show;
    // return matches;
  }
}
