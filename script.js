/* code to make the fun fact button function */

var factList = ["I was born and raised in Ohio!", "I love going on hikes and being in nature!", "In high school I worked on NASA funded Land-Cover and Land-Use Change research project.  I classified satellite images data as tree crop, non tree crop, forest, or barren land.  These data points were used to train an AI model that illustrated the effect the Syrian Civil had on the land and how it was used.  It was a great project and I hope to do research at GT in the future!", "I am passionate about sustainability and conservation!", "I started a coding club at my high school!", "I love painting with watercolors!"];

var fact=document.getElementById("fact");
var factButton=document.getElementById("factButton");
var count=0;

factButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML=factList[count];
  count++;

  if(count==factList.length) {
    count=0;
  }

}

