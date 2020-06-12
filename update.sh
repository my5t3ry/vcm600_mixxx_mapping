#!/bin/bash
git pull
cp -R ./controllers/* /Users/my5t3ry/Library/Application Support/Mixxx/controllers/
rm -rf /Applications/Mixxx.app/Contents/Resources/skins/pragmatic
cp -R ./skin/pragmatic /Applications/Mixxx.app/Contents/Resources/skins/