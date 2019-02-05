# 🖕iCloud
## iCloud NoSync node

This package gives you access to `nosync-node` or `nsn` command which does some work to stop iCloud from syncing `node_modules` and forever eating your processing power, bandwidth, and battery.

This does a few things to work: 
- Step 1: if no `node_modules` is detected it will `npm install` for you
- Step 2: Rename `node_modules` to `node_modules.nosync`
- Step 3: Add symlink `node_modules` -> `node_modules.nosync` so stuff still works
- Step 4: Add entry to `.gitignore` to ignore the newly created `node_modules` symlink and `node_modules.nosync`
- Step 5: 💰💰💰?

### Special thx to Apple for not creating an ignore setting 🙄

## To prevent iCloud from syncing any folder in Finder 
https://github.com/tsdexter/iCloud-NoSync
