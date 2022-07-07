/**
 * The localeCompare() method returns a number indicating whether a reference string comes before,
 *  or after, or is the same as the given string in sort order
 */

const a='reserve';
const b='RESERVE';

console.log(a.localeCompare(b));

console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));