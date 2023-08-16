#!/bin/bash

# Install tools
tools=("python3" "dotenet")

for tool in "${tools[@]}"; do
    sudo apt install -y "$tool" >> installOutput.txt 2>&1
done
