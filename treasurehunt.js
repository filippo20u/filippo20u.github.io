// Set up counter
var counter = 10;

// Set up a variable to store the random location of the rainbow treasure
var treasureLocation = Math.ceil(Math.random() * 25);

// Set up a variable to store the random location of the bomb

var bombLocation = Math.ceil(Math.random() * 25);

// Add a conditional statement that will alert either the location of the
// bomb, the location of the treasure or the id to alert the location of the
// treasure and bomb

if (treasureLocation === bombLocation) {
  bombLocation++;
} else {
  alert("Let's Play!");
}

// Replace the alert with an action that will change the question mark in
// the td innerHTML to the tree, bomb, or treasure icon
// &#x1f332 = tree icon
// &#x2620 = bomb icon
// &#x1f308 = rainbow icon

const locationCheck = location => {
  if (treasureLocation != location && bombLocation != location) {
    document.getElementById(location).innerHTML =
      '<img src = "https://cdn.pixabay.com/photo/2017/01/31/22/31/boy-2027761_960_720.png" height = "50px">';
  } else if (bombLocation === location) {
    alert('You lose! Click the Restart Game button below to play again.');
    document.getElementById(location).innerHTML =
      '<img src = "https://cdn.pixabay.com/photo/2013/07/13/12/04/death-159120_960_720.png" height = "50px">';
    document.getElementById('table').style.pointerEvents = 'none';
    document.getElementById(location).style.pointerEvents = 'none';
  } else if (treasureLocation === location) {
    alert('You win! Click the Restart Game button below to play again.');
    document.getElementById(location).innerHTML =
      '<img src = "https://cdn.pixabay.com/photo/2017/02/01/00/26/commode-2028556_960_720.png" height = "50px">';
    document.getElementById('table').style.pointerEvents = 'none';
    document.getElementById(location).style.pointerEvents = 'none';
  } else {
    alert('something went wrong');
  }
};
