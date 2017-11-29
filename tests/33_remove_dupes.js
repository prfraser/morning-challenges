// Tests here!
var assert = require('assert');
var removeDupes = require('../33_remove_dupes');

describe('Remove Dupes', function() {
  it('should remove duplicate', function() {
    assert.deepEqual(['a','b','1'], removeDupes(['a','b','1','1']));
  });
  it('should work without duplicates', function() {
    assert.deepEqual(['1','2','3'], removeDupes(['1','2','3']));
  });
  it('should work with numbers', function() {
    assert.deepEqual(['1','2','3', 1], removeDupes(['1','2','3', 1, '1']));
  });
});