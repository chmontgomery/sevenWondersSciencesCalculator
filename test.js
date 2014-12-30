var assert = require('assert');
var sevenWondersScience = require('./index.js');

// null params
assert.strictEqual(sevenWondersScience(), 0);
assert.strictEqual(sevenWondersScience(0), 0);
assert.strictEqual(sevenWondersScience(null, null, 1), 1);

// factors
assert.strictEqual(sevenWondersScience(0,0,0), 0);
assert.strictEqual(sevenWondersScience(1,0,0), 1);
assert.strictEqual(sevenWondersScience(2,0,0), 4);
assert.strictEqual(sevenWondersScience(0,0,3), 9);
assert.strictEqual(sevenWondersScience(1,0,3), 10);

// full sets
assert.strictEqual(sevenWondersScience(1,1,3), 18);
assert.strictEqual(sevenWondersScience(2,2,2), 26);
assert.strictEqual(sevenWondersScience(3,1,2), 21);
assert.strictEqual(sevenWondersScience(3,4,3), 55);