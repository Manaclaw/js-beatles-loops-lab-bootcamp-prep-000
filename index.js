function theBeatlesPlay(musicians, instruments) {
  var bandPlays = []
  for (let i = 0; i < musicians.length; i++) {
    bandPlays.push(musicians[i] + " plays " + instruments[i])
    
  }
  return bandPlays
}

function johnLennonFacts(facts) {
  var exclaimedFacts = []
  for (let i = 0; i < facts.length; i++) {
    exclaimedFacts.push(facts[i] + "!!!")
  }
  return exlaimedFacts
}