function localGreet(locale) {
  switch(extractLanguage(locale)) {
    case 'fr':
      switch(extractRegion(locale)) {
        default:  return 'Salut!';
      }
    case 'pt':
      switch(extractRegion(locale)) {
        default:  return 'Ola!';
      }
    case 'de':
      switch(extractRegion(locale)) {
        default:  return 'Hallo!';
      }
    case 'sv':
      switch(extractRegion(locale)) {
        default:  return 'Hej!';
      }
    case 'af':
      switch(extractRegion(locale)) {
        default:  return 'Haai!';
      }
    case 'en':
      switch(extractRegion(locale)) {
        case 'US':  return 'Hey!';
        case 'GB':  return 'Hello!';
        case 'AU':  return 'Howdy!';
        default:
          console.log(locale);
          return 'Hi!';
      }
    default:
      return 'Please input a known locale code';
  }
}

function extractLanguage(locale) {
 return locale.slice(0, 2);
}

function extractRegion(locale) {
 return locale.slice(3, 5);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
console.log(extractRegion('en_GB.UTF-8'));