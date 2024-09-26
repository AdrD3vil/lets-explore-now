import { GIST, GIT, siteTitle, LOCALSTORE } from "../constants";
import Oxy from "../oxy"
import { loadStateBulk, saveStateBulk } from "./localStorage";
import { useStore } from "./store";
import lang from '../assets/en.json'
import config from '../assets/config.json'
const { setState, setData, setPageNames } = useStore.getState()

const formatConfig = (configJson) => {
    const {  CONSTS, primaryImgs } = configJson
    const { imgurBase,  } = CONSTS;
    Object.keys(primaryImgs).forEach(key => {
        const i = primaryImgs[key]
        i.key = key
        i.src = imgurBase + i.src;
        i.alt = i.alt + " - " + siteTitle
        if(i.ratio) i.height = i.width * i.ratio;
    })
    return configJson
}

export const Controller = {
    init: async () => {
        console.log("INIT TRIGGERED")
        setPageNames(lang.pages)
        setState({ config: formatConfig(config), texts: lang, loaded: true, version: config.version})
        // const LS = loadStateBulk([LOCALSTORE.config, LOCALSTORE.en])
        // const [config, lang] = [LS[LOCALSTORE.config], LS[LOCALSTORE.en]]
        // if(!config || !lang) {
        //     Controller.loadVersion()
        //     return {status: 'Local Storage Empty, loadVersion Triggered'}
        // }
        // else {
        //     setPageNames(lang.pages)
        //     setState({ config: formatConfig(config), texts: lang, loaded: true, version: config.version})
        //     Controller.syncVersion()
        //     return {status: 'Loaded from Local Storage'}
        // }
    },
}