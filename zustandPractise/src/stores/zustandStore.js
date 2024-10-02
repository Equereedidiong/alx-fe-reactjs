// creating a zustand store application

import { create } from 'zustand'
// zuztsand documnetation
// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

// Our own code block

// name of store can be specific e.g store for aunthentication can be const autheticationStore =
const  useStore = create((set) => ({ 
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  removeCount: () => set((state) => ({ count: 0 })),


}))

export default  useStore;