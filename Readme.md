npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev

npx babel js -d target
======
npm install --save @babel/polyfill
======

npx babel js -d target --watch --source-maps

