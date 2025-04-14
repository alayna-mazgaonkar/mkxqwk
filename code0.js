gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.GDFreePlayButtonObjects1= [];
gdjs.HomeCode.GDFreePlayButtonObjects2= [];
gdjs.HomeCode.GDNewPanelSpriteObjects1= [];
gdjs.HomeCode.GDNewPanelSpriteObjects2= [];


gdjs.HomeCode.userFunc0xb56608 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (window.mediaRecorder && window.mediaRecorder.state === "recording") {
  window.mediaRecorder.stop();
  console.log("🛑 Recording stopped.");
}

};
gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FreePlayButton"), gdjs.HomeCode.GDFreePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDFreePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDFreePlayButtonObjects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDFreePlayButtonObjects1[k] = gdjs.HomeCode.GDFreePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDFreePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FreePlay Menu", false);
}}

}


{


gdjs.HomeCode.userFunc0xb56608(runtimeScene);

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDFreePlayButtonObjects1.length = 0;
gdjs.HomeCode.GDFreePlayButtonObjects2.length = 0;
gdjs.HomeCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.HomeCode.GDNewPanelSpriteObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);
gdjs.HomeCode.GDFreePlayButtonObjects1.length = 0;
gdjs.HomeCode.GDFreePlayButtonObjects2.length = 0;
gdjs.HomeCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.HomeCode.GDNewPanelSpriteObjects2.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
