/**
 * Created by Oleksandr Tserkovnyi on 11/9/17.
 * kemperomg@gmail.com
 */

// import { curry } from 'ramda'; // index.build.js  473 kB       0  [emitted]  [big]  null
import curry from 'ramda/src/curry'; // index.build.js  10.6 kB       0  [emitted]  null

const a = curry(Math.atan2);

console.log(a(10, 20));
