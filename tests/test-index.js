var assert = require('assert');
var jp_ems_fee = require('./../index.js')

describe('method tests', function() {
  it('test asia method', function() {
    assert(jp_ems_fee.asia(1) == 1400);
    assert(jp_ems_fee.asia(30000) == 26500);
  });
  it('test oceania method', function() {
    assert(jp_ems_fee.oceania(1) == 2000);
    assert(jp_ems_fee.oceania(30000) == 36500);
  });
  it('test europa method', function() {
    assert(jp_ems_fee.europa(1) == 2200);
    assert(jp_ems_fee.europa(30000) == 42600);
  });
  it('test africa method', function() {
    assert(jp_ems_fee.africa(1) == 2400);
    assert(jp_ems_fee.africa(30000) == 69700);
  });
});
