export const getToken = () => {
    const store = localStorage.getItem('student-enrollment')
    const state = JSON.parse(store).state
    const token = state ? state.token : null
    return token
}