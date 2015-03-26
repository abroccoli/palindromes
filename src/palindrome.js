var palindrome = {
  count: function(phrases){
    var dromes = [];

    phrases.forEach(function(phrase){
      var phrasestr = phrase.replace(/\s/g, '');
      if (phrasestr.toLowerCase() === phrasestr.split('').reverse().join('').toLowerCase()){
        dromes.push(phrase);
      }
    });
    return dromes.length;
  }
};
