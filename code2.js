gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDNewButtonObjects1= [];
gdjs.GameCode.GDNewButtonObjects2= [];
gdjs.GameCode.GDLocationObjects1= [];
gdjs.GameCode.GDLocationObjects2= [];


gdjs.GameCode.userFunc0xb5e378 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (!window.mediaRecorder || window.mediaRecorder.state === "inactive") {
  // Only ask for permissions if not already recording
  Promise.all([
    navigator.mediaDevices.getDisplayMedia({ video: true }),
    navigator.mediaDevices.getUserMedia({ audio: true })
  ])
  .then(([screenStream, audioStream]) => {
    const combinedStream = new MediaStream([
      ...screenStream.getVideoTracks(),
      ...audioStream.getAudioTracks()
    ]);

    window.mediaRecorder = new MediaRecorder(combinedStream);
    window.recordedChunks = [];

    mediaRecorder.ondataavailable = function(event) {
      if (event.data.size > 0) {
        window.recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = function() {
      const blob = new Blob(window.recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "recorded_gameplay.webm";
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
    };

    mediaRecorder.start();
    console.log("🎥 Recording started.");
  })
  .catch(err => {
    console.error("Error accessing screen/mic:", err);
  });
} else {
  console.log("Already recording");
}

};
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.GameCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDNewButtonObjects1[k] = gdjs.GameCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Record__Stop.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Record__Save.func(runtimeScene, "https://drive.google.com/drive/folders/1lG40vZI0LLr6IIVf5ok6i8RE_p5t2Vs-?usp=drive_link", "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.GameCode.GDLocationObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLocationObjects1[i].setTexture("IMG_20250412_131727.jpg", runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameCode.userFunc0xb5e378(runtimeScene);

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewButtonObjects1.length = 0;
gdjs.GameCode.GDNewButtonObjects2.length = 0;
gdjs.GameCode.GDLocationObjects1.length = 0;
gdjs.GameCode.GDLocationObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
gdjs.GameCode.GDNewButtonObjects1.length = 0;
gdjs.GameCode.GDNewButtonObjects2.length = 0;
gdjs.GameCode.GDLocationObjects1.length = 0;
gdjs.GameCode.GDLocationObjects2.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
