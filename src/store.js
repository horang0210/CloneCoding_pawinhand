import { create } from 'zustand'

const useUsernameStore = create((set) => ({
  username: '',
  updateUsername: (newName) => set({username: newName}),
}))

export default useUsernameStore