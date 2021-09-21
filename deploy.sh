#!/usr/bin/env sh
set -e # abort on errors
npm run build # build
cd dist # navigate into the build output directory
git add -A
git commit -m 'deploy'
git push -f git@github.com:dandan-drori/Tic-Tac-Toe-Vue.git master:gh-pages
cd -