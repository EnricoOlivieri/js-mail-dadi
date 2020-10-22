var emails = ['enrico.olivieri1@live.it', 'enrico.olivieri2@live.it', 'enrico.olivieri3@live.it', 'enrico.olivieri4@live.it', 'enrico.olivieri5@live.it']

var inputEmail = prompt('Inserire indirizzo mail.')

var advise = 'Mail non trovata.';

for (var i = 0; i < emails.length; i++){
  if(emails == inputEmail){
    advise = 'Mail trovata';
  }
}

console.log(advise);
