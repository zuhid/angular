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
- `npm audit` to check for package vulnerabilities

- To Kill already running localhost
```
sudo kill -9 `sudo lsof -t -i:4200`
```

# devDependencies
- `npm install --save-dev bootstrap`
- `npm install --save-dev d3`
- `npm install --save-dev google-charts`
- `npm install --save-dev plotly.js`



# npm audit
```
npm audit
npm config set strict-ssl false
npm audit --audit-level=high
```

# Set pwa
```
ng add @angular/pwa
ng build --configuration=production
npx http-server -p 8080 -c-1 dist/zuhid/browser
```