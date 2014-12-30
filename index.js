/**
 * Returns the total science score
 * @param {number} stones
 * @param {number} wheels
 * @param {number} protractors
 * @returns {number}
 */
module.exports = function (stones, wheels, protractors) {
  var score = 0;
  stones = stones || 0;
  wheels = wheels || 0;
  protractors = protractors || 0;
  score += Math.pow(stones, 2);
  score += Math.pow(wheels, 2);
  score += Math.pow(protractors, 2);
  if (stones && wheels && protractors) {
    var m = Math.min(stones, wheels, protractors);
    score += m * 7;
  }
  return score;
};