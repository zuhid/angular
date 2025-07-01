# Run test with code coverage
`ng test --karma-config karma.conf.js --code-coverage`
`ng test --include='**/login/*.ts'`

# How to congiure karma
- run `ng generate config karma` to configure initial 


# Common scripts
- `ng new zuhid --directory web --standalone false --routing false --prefix zc --style scss --inline-style false --ssr false --skip-git --skip-install --dry-run` Create new project
- `ng serve` --- Start a local development server
- `ng build`--- Building
- `ng test` --- Running unit tests
- `ng e2e` --- Running end-to-end tests
- `npx npm-check-updates -u` --- upgrade all packages
- `npm list -g depth 0` --- list all global npm packages
- `ng build --named-chunks --stats-json && npx webpack-bundle-analyzer dist/app/stats.json` --- bundle analyzer
- To Kill already running localhost
```
sudo kill -9 `sudo lsof -t -i:4200`
```
