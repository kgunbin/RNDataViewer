jest.unmock('../selection');
jest.unmock('../../actions/types');

var TOGGLE_SELECT = require('../../actions/types');
var selection = require('../selection');

describe('Selection reducer test', () => {
  it('Should select correctly', () => {
    var state = [];
    var action = {type: TOGGLE_SELECT, id: 1};
    var result = selection.selection(state, action);
    expect(result).toEqual([1]);
  });
  it('Should deselect correctly', () => {
    var state = [1,2,3];
    var action = {type: TOGGLE_SELECT, id: 2};
    var result = selection.selection(state, action);
    expect(result).toEqual([1,3]);
  });
});
