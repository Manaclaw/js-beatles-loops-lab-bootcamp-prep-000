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
    i++; factsB.push(facts[i] + "!!!")
    
  }
  return factsB
}
  
