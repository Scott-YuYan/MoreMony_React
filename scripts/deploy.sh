#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update build" &&
git remote add origin git@github.com:Scott-YuYan/MoreMoney-React-Website.git &&
git push -u origin master -f
cd -
echo "deploy done"