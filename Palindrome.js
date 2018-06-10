let results = '';
function reversek(ar) {
  for (let index = ar.length -1; index >= 0; index--) {
    results = results + ar[index];
  }
  return results;
}
reversek('ibu ratna antar ubi');
