#!/bin/bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
cd $SCRIPTPATH

node index.js &


cd ~/Desktop/Chatbot/

source activate chatbot

python chatbot.py &

fg | grep -E "[0-9]"


trap "killall python && killall node && echo "" > output && echo "" > input" 2