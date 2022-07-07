const paragraph='The quick brown fox jumps over the lazy dog. It barked.';
const regex= /[A-Z]/g;
const found=paragraph.match(regex);

console.log(found);
/**
 * Let's have a closer look at regex
 * Sytax ::: ===>  /pattern/modifier(s);
 */
let pattern =/w3Schools/i;
/**
 * w3Schools ===> The pattern to seach for
 * /w3Schools/  ===> A regular expression
 * /w3Scools/   ===> A case insensitive regular expression
 */

/**
 * MODIFIERS
 * g ==>Perform a global match(rather than stopping after the fisrt match)
 * i ==>Perform a case insensitive match
 * m ==>Permorm a multiline matching
 */

/**
 * BRACKETS
 * [abc] ==>find any character btn the barckets
 * [^abc] ==> find any character not btn the bracket
 * [0-9] ==>find any character btn the bracket(any digit);
 * [^0-9] ==>find any character not btn the bracket(any non-digit);
 * (x|y)  ==>find any of the alternative specified
 */

/**
 * META CHARACTER
 * . ==>Find a single character except newline or line terminater
 * \w ==>Find a word character
 * \W ==>Find a non-word character
 * \d ==>Find a digit
 * \D ==> Find a non-digit character
 * \S  ===>Find a white space character
 * \O   ===>Find a null character
 * \n ==> Find a new line character
 * \f ==>Find a form field
 * \r ==>Find a carriege return
 * \t ==>Find a  tab character
 * \v ==> Find a vertical tab
 */


/**
 * QUANTIFIERS
 * n+ ==>match any string that contain atleast one n
 * n* ==>match any string that contain zero or more occurences of n
 * n? ==>Match any string that contain zero or no occurences of n
 * n{X} ==>Matches any string that contains a sequence of X n's 
 */