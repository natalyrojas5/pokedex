export const initialState = {
  pokemon: {
    isLoading: true,
  },
  search: {
    name: '',
    isLoading: false
  },
  pagination: {
    offset: 0,
    next: '',
    previous: '',
    isLoading: true,
  },
  message: {
    text: ''
  }
}