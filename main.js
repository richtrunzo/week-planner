var $addEntryButton = document.getElementById('add-entry-button');
var $modal = document.querySelector('.modal');
var $body = document.querySelector('body');
var $submitModalButton = document.getElementById("submit-modal-button");
var $sunday = document.getElementById("button-sunday");
var $monday = document.getElementById("button-monday");
var $tuesday = document.getElementById("button-tuesday");
var $wednesday = document.getElementById("button-wednesday");
var $thursday = document.getElementById("button-thursday");
var $friday = document.getElementById("button-friday");
var $saturday = document.getElementById("button-saturday");

$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
  $body.className = 'overlay';
});

$submitModalButton.addEventListener('click', function(event){
  $modal.className = 'hidden';
  $body.className = '';
})

$sunday.addEventListener('click', function(event){

})
document.addEventListener()
