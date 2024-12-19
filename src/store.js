import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  mul: () => set((state) => ({ count: state.count * 2 })),
  divd : ()=> set((state)=> ({ count: state.count /2}))
}))

export default useStore