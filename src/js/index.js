// ---------------------------------------------------------
// 1. Zamienić w kazdym wyrazie w zdaniu pierwszą literę na wielką
// Wynik: Ala Ma Kota A Kota Nie Ma.

function makeFirstUpper(text) {
  let result = 'Ala ma kota';
  return result;
}

document.getElementById('app').innerHTML = makeFirstUpper(
  'ala ma kota a kota nie ma.'
);
