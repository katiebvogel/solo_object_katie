var diversiteam = {
  teamName: 'DiversiTeam',
  homeGym: 'The Academy',
  coaches: ['John', 'Ryan', 'Nat'],
  gymCity: 'Brooklyn Center',
  gymState: 'Minnesota',
  fighterStatus: 'Amateur and Professional',
  gymOwner: {first: 'Greg', last: 'Nelson'},
  sport: 'Muay Thai',
  badass: true,
  kickass: function(){
    console.log('The ' + this.teamName + ' is a ' + this.sport + ' team located in ' + this.gymCity + ', ' + this.gymState + '. The ' +
    this.teamName + ' trains at ' + this.homeGym + ' owned by ' + this.gymOwner.first + ' ' + this.gymOwner.last + '. The coaches of the ' +
    this.teamName + ' are ' + this.getCoachList() + '.' + this.homeGym + ' fighters are both ' + this.fighterStatus + '.');
  },
  getCoachList: function(){
    var listResult = ''
    for(var i = 0; i < this.coaches.length; i++){
      if(i < this.coaches.length - 1) {
        listResult += this.coaches[i] + ', ';
      } else {
      listResult += 'and ' + this.coaches[i];
    }
  }
  return listResult;
},
//Setter Function below (if I have this understood correctly)
setNextBout: function(fighterOne, fighterTwo){
  var fighterOne = fighterOne;
  var figtherTwo = fighterTwo;
  console.log('The next fight will be a match between ' + fighterOne + ' and ' + fighterTwo + '.');
}

}


diversiteam.kickass();

//Setter Function:  Call your setter function here using properties as parameters

diversiteam.setNextBout(diversiteam.coaches[0], diversiteam.coaches[1]);
