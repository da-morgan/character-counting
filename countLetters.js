function countLetters(string){

  var letterArray = string.split('');
  var objectToReturn = {};

  for(var i = 0; i < letterArray.length; i++){

    if(letterArray[i].match(/\w/)){
      if(!objectToReturn[letterArray[i]]){
        objectToReturn[letterArray[i]] = 1;
      } else {
        objectToReturn[letterArray[i]] ++;
      }
    }

  }

  return objectToReturn;
}

console.log(countLetters('hello hello!!!'));