jest.unmock('../selection');
jest.unmock('../../actions/types');

describe('Selection reducer test', () => {
  beforeEach(() => {
  });
  it('Should select correctly', () => {
    debugger;
    const types = require('../../actions/types');
    const selection = require('../selection');
    const state = [];
    const action = {type: types.TOGGLE_SELECT, id: 1};
    const result = selection.selection(state, action);
    expect(result).toEquals([1]);
  });
  it('Should deselect correctly', () => {
    const state = [1,2,3];
    const acton = {type: types.TOGGLE_SELECT, id: 2};
    const result = selection.selection(state, action);
    expect(result).toEquals([1,3]);
  });
});
