import "./weapp-adapter"
wx.setEnableDebug({
  enableDebug: true,
})

import {EngineLoader} from "./dmloader"

import {realLoad} from "./Warbattlestutorial_wasm"
EngineLoader.load("canvas", "Warbattlestutorial", {
    loadAndRunScriptAsync: (src)=>{
        console.log("load", src)
        realLoad();
    }
});
