# webpack-template
This repository contains sample webpack configuration. It can be used to create webpack projects conveniently. 

## Usage
First, build your website using what you have in the ./src directory. 

To view in real time what you have built, run "npm run start" and a browser window should pop up with what you have built. 

To bundle the website for production, run "npm run build" and generate production files located in a new ./dist directory. 

To push and deploy your website, follow these steps: 
  1. Make a new branch called exactly "gh-pages": 
  ```
  git branch gh-pages
  ```
  2. Commit all work by running
  ```
  git status
  ```
  3. Merge the main branch to the gh-pages branch: 
  ```
  git checkout gh-pages && git merge main --no-edit
  ```
  4. Run 
  ```
  npm run build
  ```
  to bundle project. 
  5. Run the following in order: 
  ```
  git add dist -f && git commit -m "Deployment commit"
  npm run deploy
  git checkout main
  ```
  6. Set source branch to "gh-pages". The website will now be online at this branch. 