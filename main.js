var $addEntryButton = document.getElementById('add-entry-button');
var $modal = document.querySelector('.modal');
var $body = document.querySelector('body');
var $submitModalButton = document.getElementById("submit-modal-button")

$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
  $body.className = 'overlay';
});

$submitModalButton.addEventListener('click', function(event){
  $modal.className = 'hidden';
  $body.className = '';
})
