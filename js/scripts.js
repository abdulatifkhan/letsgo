var PIYODA = 3.6;
var VELOSIPED = 20.1;
var MASHINA = 70;
var SAMOLYOT = 800;

var resultPiyo = document.querySelector('.piyoda');
var resultPiyoMin = document.querySelector('.piyodamin');

var resultVelo = document.querySelector('.velo');
var resultVeloMin = document.querySelector('.velomin');

var resultMoshin = document.querySelector('.moshin');
var resultMoshinMin = document.querySelector('.moshinmin');

var resultUchoq = document.querySelector('.uchoq');
var resultUchoqMin = document.querySelector('.uchoqmin');

var elForm = document.querySelector('.page-form');

elForm.addEventListener ('submit', function (evt) { 
  evt.preventDefault();

  var elNumberInput = parseFloat(elForm.querySelector('.masofa-input').value.trim(), 10);

  var tezlikPiyodaSoat = (elNumberInput / PIYODA).toFixed(2);
  var piyodaSoat = tezlikPiyodaSoat - Math.floor(tezlikPiyodaSoat).toFixed(2);
  var piyodaDaqiqa = 60 * piyodaSoat % 100;
  resultPiyo.textContent = Math.floor(tezlikPiyodaSoat);
  resultPiyoMin.textContent = Math.floor(piyodaDaqiqa);

  var tezlikVeloSoat = (elNumberInput / VELOSIPED).toFixed(2);
  var veloSoat = tezlikVeloSoat - Math.floor(tezlikVeloSoat).toFixed(2);
  var veloDaqiqa = 60 * veloSoat % 100;
  resultVelo.textContent = Math.floor(tezlikVeloSoat);
  resultVeloMin.textContent = Math.floor(veloDaqiqa);

  var tezlikMoshinSoat = (elNumberInput / MASHINA).toFixed(2);
  var moshinSoat = tezlikMoshinSoat - Math.floor(tezlikMoshinSoat).toFixed(2);
  var moshinDaqiqa = 60 * moshinSoat % 100;
  resultMoshin.textContent = Math.floor(tezlikMoshinSoat);
  resultMoshinMin.textContent = Math.floor(moshinDaqiqa);

  var tezlikUchoqSoat = (elNumberInput / SAMOLYOT).toFixed(2);
  var uchoqSoat = tezlikUchoqSoat - Math.floor(tezlikUchoqSoat).toFixed(2);
  var uchoqDaqiqa = 60 * uchoqSoat % 100;
  resultUchoq.textContent = Math.floor(tezlikUchoqSoat);
  resultUchoqMin.textContent = Math.floor(uchoqDaqiqa);
})