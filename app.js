function createParagraph(){
  var wordOne = document.getElementById('wordOne').value;
  var wordTwo = document.getElementById('wordTwo').value;
  var wordThree = document.getElementById('wordThree').value;
  var wordFour = document.getElementById('wordFour').value;
  var wordFive = document.getElementById('wordFive').value;
  var wordSix = document.getElementById('wordSix').value;
  var wordSeven = document.getElementById('wordSeven').value;
  var wordEight = document.getElementById('wordEight').value;
  var wordNine = document.getElementById('wordNine').value;


  var paragraph = `In a land far, far away, a group of imaginative ${wordOne} embarked on a gregarious adventure. They ${wordTwo}  to ${wordThree} and ${wordFour} explored its vibrant landscapes. Along the way, they encountered a majestic ${wordFive}, who guided them to ${wordSix} hidden treasures. The treasures sparkled in hues of ${wordSeven} and ${wordEight}, creating an enchanting scene. As they uncovered each gem, they couldn't help but exclaim, "${wordNine}!" It was a truly magical journey!`;
  
  document.getElementById('answer').innerHTML = paragraph;
}
