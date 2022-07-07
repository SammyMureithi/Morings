/**
 * Returns the calling string value converted to lowerCase,according to any locale -specific case mapping
 */
 const dotted = 'İstanbuL';
 console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
 // expected output: "i̇stanbul"
 
 console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
 const city = 'istanbul';
 console.log(city.toLocaleUpperCase());
// expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// expected output: "İSTANBUL"
