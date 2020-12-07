var $addEntryButton = document.getElementById('add-entry-button');
var $modal = document.querySelector('.modal');
var $body = document.querySelector('body');

$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
  $body.className = 'overlay';
});
