#!/bin/bash

# Install
myInstalls1=("python3" "dotenet")

for str in ${myInstalls1[@]}; do
    sudo apt install -y $str >>installOutput.txt
done
