export default (state, action) => {
    // bad
    state[0] = 'Sam'
    state.pop()
    state.push()

    state.name = 'Same'
    state.age = 30

    return state
};