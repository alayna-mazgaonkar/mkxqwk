gdjs.FreePlay_32MenuCode = {};
gdjs.FreePlay_32MenuCode.localVariables = [];
gdjs.FreePlay_32MenuCode.GDBackgroundObjects1= [];
gdjs.FreePlay_32MenuCode.GDBackgroundObjects2= [];
gdjs.FreePlay_32MenuCode.GDButton_95951Objects1= [];
gdjs.FreePlay_32MenuCode.GDButton_95951Objects2= [];
gdjs.FreePlay_32MenuCode.GDLocationObjects1= [];
gdjs.FreePlay_32MenuCode.GDLocationObjects2= [];
gdjs.FreePlay_32MenuCode.GDButton_95952Objects1= [];
gdjs.FreePlay_32MenuCode.GDButton_95952Objects2= [];
gdjs.FreePlay_32MenuCode.GDRecordObjects1= [];
gdjs.FreePlay_32MenuCode.GDRecordObjects2= [];
gdjs.FreePlay_32MenuCode.GDButton_95953Objects1= [];
gdjs.FreePlay_32MenuCode.GDButton_95953Objects2= [];
gdjs.FreePlay_32MenuCode.GDButton_95954Objects1= [];
gdjs.FreePlay_32MenuCode.GDButton_95954Objects2= [];
gdjs.FreePlay_32MenuCode.GDButton_95955Objects1= [];
gdjs.FreePlay_32MenuCode.GDButton_95955Objects2= [];
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1= [];
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects2= [];
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1= [];
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects2= [];
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects1= [];
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects2= [];
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1= [];
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects2= [];
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1= [];
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects2= [];


gdjs.FreePlay_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_1"), gdjs.FreePlay_32MenuCode.GDButton_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDButton_95951Objects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDButton_95951Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDButton_95951Objects1[k] = gdjs.FreePlay_32MenuCode.GDButton_95951Objects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDButton_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.FreePlay_32MenuCode.GDLocationObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocationObjects1[i].setTexture("IMG_20250412_131727.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_2"), gdjs.FreePlay_32MenuCode.GDButton_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDButton_95952Objects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDButton_95952Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDButton_95952Objects1[k] = gdjs.FreePlay_32MenuCode.GDButton_95952Objects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDButton_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.FreePlay_32MenuCode.GDLocationObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocationObjects1[i].setTexture("IMG_20250412_131446.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_3"), gdjs.FreePlay_32MenuCode.GDButton_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDButton_95953Objects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDButton_95953Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDButton_95953Objects1[k] = gdjs.FreePlay_32MenuCode.GDButton_95953Objects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDButton_95953Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.FreePlay_32MenuCode.GDLocationObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocationObjects1[i].setTexture("IMG_20250412_131645.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_4"), gdjs.FreePlay_32MenuCode.GDButton_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDButton_95954Objects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDButton_95954Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDButton_95954Objects1[k] = gdjs.FreePlay_32MenuCode.GDButton_95954Objects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDButton_95954Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.FreePlay_32MenuCode.GDLocationObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocationObjects1[i].setTexture("IMG_20250412_131606.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_5"), gdjs.FreePlay_32MenuCode.GDButton_95955Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDButton_95955Objects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDButton_95955Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDButton_95955Objects1[k] = gdjs.FreePlay_32MenuCode.GDButton_95955Objects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDButton_95955Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location"), gdjs.FreePlay_32MenuCode.GDLocationObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocationObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocationObjects1[i].setTexture("IMG_20250412_131545.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Record"), gdjs.FreePlay_32MenuCode.GDRecordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDRecordObjects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDRecordObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDRecordObjects1[k] = gdjs.FreePlay_32MenuCode.GDRecordObjects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDRecordObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Record__Start.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location_Menu"), gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1);
{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LocationButton"), gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1[k] = gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location_Menu"), gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].setTexture("IMG_20250412_131755.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character_Button"), gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1[k] = gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location_Menu"), gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].setTexture("IMG_20250412_132237.jpg", runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Prop_Menu"), gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1[k] = gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Location_Menu"), gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length ;i < len;++i) {
    gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1[i].setTexture("IMG_20250412_132207.jpg", runtimeScene);
}
}}

}


};

gdjs.FreePlay_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FreePlay_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95951Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95951Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95952Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95952Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDRecordObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDRecordObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95953Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95953Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95954Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95954Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95955Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95955Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects2.length = 0;

gdjs.FreePlay_32MenuCode.eventsList0(runtimeScene);
gdjs.FreePlay_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95951Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95951Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95952Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95952Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDRecordObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDRecordObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95953Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95953Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95954Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95954Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95955Objects1.length = 0;
gdjs.FreePlay_32MenuCode.GDButton_95955Objects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocation_9595MenuObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDLocationButtonObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595MenuObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDCharacter_9595ButtonObjects2.length = 0;
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects1.length = 0;
gdjs.FreePlay_32MenuCode.GDProp_9595MenuObjects2.length = 0;


return;

}

gdjs['FreePlay_32MenuCode'] = gdjs.FreePlay_32MenuCode;
