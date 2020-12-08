var $addEntryButton = document.getElementById('add-entry-button');
var $modal = document.querySelector('.modal');
var $body = document.querySelector('body');
var $submitModalButton = document.getElementById('submit-modal-button');
var $sunday = document.getElementById('button-sunday');
var $monday = document.getElementById('button-monday');
var $tuesday = document.getElementById('button-tuesday');
var $wednesday = document.getElementById('button-wednesday');
var $thursday = document.getElementById('button-thursday');
var $friday = document.getElementById('button-friday');
var $saturday = document.getElementById('button-saturday');
var $mondayTable = document.querySelectorAll('.monday-table');
var $tuesdayTable = document.querySelectorAll('.tuesday-table');
var $select = document.querySelectorAll('.sel-border');
var $description = document.getElementById('modal-description');
var $scheduleHeader = document.querySelector('.schedule-header');
var $time = document.querySelectorAll('.time');
console.log($time.textContent);

var data = {
  days: {
    sunday: {
      title: 'Scheduled Events for Sunday',
      time: '',
      description: ''
    },
    monday: {
      title: 'Scheduled Events for Monday',
      time: '',
      description: ''
    },
    tuesday: {
      title: 'Scheduled Events for Tuesday',
      time: '',
      description: ''
    },
    wednesday: {
      title: 'Scheduled Events for Wednesday',
      time: '',
      description: ''
    },
    thursday: {
      title: 'Scheduled Events for Thursday',
      time: '',
      description: ''
    },
    friday: {
      title: 'Scheduled Events for Friday',
      time: '',
      description: ''
    },
    saturday: {
      title: 'Scheduled Events for Saturday',
      time: '',
      description: ''
    }
  }
};
console.log(data);
$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
  $body.className = 'overlay';
});

$submitModalButton.addEventListener('click', function (event) {
  $modal.className = 'hidden';
  $body.className = '';
  if ($select[0].value === 'sunday') {
    data.days.sunday.time = $select[1].value;
    data.days.sunday.description = $description.value;
  } else if ($select[0].value === 'monday') {
    data.days.monday.time = $select[1].value;
    data.days.monday.description = $description.value;
  } else if ($select[0].value === 'tuesday') {
    data.days.tuesday.time = $select[1].value;
    data.days.tuesday.description = $description.value;
  } else if ($select[0].value === 'wednesday') {
    data.days.wednesday.time = $select[1].value;
    data.days.wednesday.description = $description.value;
  } else if ($select[0].value === 'thursday') {
    data.days.thursday.time = $select[1].value;
    data.days.thursday.description = $description.value;
  } else if ($select[0].value === 'friday') {
    data.days.friday.time = $select[1].value;
    data.days.friday.description = $description.value;
  } else {
    data.days.saturday.time = $select[1].value;
    data.days.saturday.description = $description.value;
  }
});

$monday.addEventListener('click', function (event) {
  $mondayTable[0].className = 'row text monday-table';
  $mondayTable[1].className = 'row text monday-table';
  $tuesdayTable[0].className = 'row text tuesday-table hidden';
  $tuesdayTable[1].className = 'row text tuesday-table hidden';
});

document.addEventListener('click', function (event) {
  if (event.target === $sunday) {
    $scheduleHeader.textContent = data.days.sunday.title;
  } else if (event.target === $monday) {
    $scheduleHeader.textContent = data.days.monday.title;
  } else if (event.target === $tuesday) {
    $scheduleHeader.textContent = data.days.tuesday.title;
  } else if (event.target === $wednesday) {
    $scheduleHeader.textContent = data.days.wednesday.title;
  } else if (event.target === $thursday) {
    $scheduleHeader.textContent = data.days.thursday.title;
  } else if (event.target === $friday) {
    $scheduleHeader.textContent = data.days.friday.title;
  } else if (event.target === $saturday) {
    $scheduleHeader.textContent = data.days.saturday.title;
  }

});
