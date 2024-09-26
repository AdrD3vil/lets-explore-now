import { immer } from 'zustand/middleware/immer'
// import { loadState, saveState } from './localStorage'
import { createWithEqualityFn  } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// const forLocal = (s) => {
//     const { version, darkMode, links, files } = s
//     return { version, darkMode, links, files }
// }
// const storeLocalPreference = (s) => saveState('ssa-pref', forLocal(s))

export const useStore = createWithEqualityFn(immer((set) => ({
    version: '0.0',
    config: {},
    texts: {},
    loaded: false,
    imgLoaded: false,
    data: {
        privacy: null,
    },
    pages: {
      home: { component: 'Home', path: '/home', Icon: (p) => <HomeIcon {...p}/> },
      contact: { component: 'Contact', path: '/about', Icon: (p) => <AlternateEmailIcon {...p} /> },
    },
    setPageNames: (names) => set((s) => {
        Object.keys(names).forEach((k) => {
            s.pages[k].name = names[k];
        });
    }),
    setState: (payload) => set((s) => {
        Object.keys(payload).forEach((k) => {
            s[k] = payload[k];
        });
    }),
    setData: (payload) => set((s) => {
        Object.keys(payload).forEach((k) => {
            s.data[k] = payload[k];
        });
    }),
})), shallow);