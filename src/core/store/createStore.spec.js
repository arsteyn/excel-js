import {createStore} from './createStore';


const reducer = (state = 0, action) => {
  if (action.type === 'A') {
    return ++state
  }
  return state
}
describe('createStore:', () => {
  test('should return store object', () => {
    const store = createStore(reducer)
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })
})
