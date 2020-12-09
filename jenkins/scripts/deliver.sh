#!/usr/bin/env sh

echo 'Builds your Angular application'
set -x
npm run-scrip build
set +x

echo 'Run your Angular application'
echo 'the file ".pidfile".'
set -x
npm run-scrip start &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://159.89.92.227:4201 to see your application in action.'
echo 'created your initial Pipeline as a Jenkinsfile.)'