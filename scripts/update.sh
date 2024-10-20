#!/usr/bin/env bash

SOURCE_PATH=${PENPOT_SOURCE_PATH};

if [[ -z "${SOURCE_PATH}" ]]; then
    echo "Please specify the penpot source code on PENPOT_SOURCE_PATH environment variable";
    exit -1;
else
    cp dist/text_editor_v2.js $SOURCE_PATH/frontend/vendor/text_editor_v2.js
    cp dist/text_editor_v2.js.map $SOURCE_PATH/frontend/vendor/text_editor_v2.js.map
fi
