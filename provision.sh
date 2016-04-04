#!/usr/bin/env bash
echo "provisionning your virtual env with node"
sudo apt-get update
sudo apt-get install -y curl
sudo curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
nodeversion=$(node --version)
echo $nodeversion
sudo apt-get install -y git
