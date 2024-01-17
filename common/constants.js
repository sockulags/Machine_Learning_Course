const constants={};

constants.DATA_DIR="data";
constants.RAW_DIR=constants.DATA_DIR+"/raw";
constants.DATASET_DIR=constants.DATA_DIR+"/dataset";
constants.IMG_DIR=constants.DATASET_DIR+"/img";
constants.JSON_DIR=constants.DATASET_DIR+"/json";
constants.SAMPLES=constants.DATASET_DIR+"/samples.json"
constants.JS_OBJECTS="common/js_objects"
constants.SAMPLES_JS=constants.JS_OBJECTS+"/samples.js";

if(typeof module!=='undefined'){
    module.exports=constants;
}
