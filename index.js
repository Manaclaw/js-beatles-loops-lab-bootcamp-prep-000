function theBeatlesPlay(musicians, instruments) {
  var bandPlays = []
  for (let i = 0; i < musicians.length; i++) {
    bandPlays.push(musicians[i] + " plays " + instruments[i])
    
  }
  return bandPlays
}

function johnLennonFacts(facts) {
  var factsB = []
  var i = 0
  while (i < facts.length) {
     factsB.push(facts[i] + "!!!")
     i++;
    
  }
  return factsB
}

function iLoveTheBeatles(n) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
  }
  while (i < n && n < 15); {
    array.push("I love the Beatles!"); i++;
  }
  return array
}

  
