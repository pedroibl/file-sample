#! /usr/bin/env bash

# Install
myInstalls1=("firefox" "dropbox" "google-chrome" "visual-studio-code" "obsidian" "python3" "dotenet")

for str in ${myInstalls1[@]}; do
    sudo apt install -y $str >>installOutput.txt
done
