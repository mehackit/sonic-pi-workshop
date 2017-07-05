# Website for mehackit media-art workshops with Processing

## Setting up

- Log in to GitHub and fork this repo
- Clone your fork of this repo. Open terminal, navigate to preferred folder and type:
```
git clone git@github.com:YOUR-USERNAME/sonic-pi-workshop.git
```
- Install bundler
```
gem install bundler
```
- Install dependencies
```
bundle install
```
- Run Jekyll
```
bundle exec jekyll serve
```

## How to contribute

- Go to your flder:
```
cd <path to your folder>
```
- Create new branch for your fix and change to that branch:
```
git checkout -b your_branch_name
```

Be wary of encoding issues, use UTF-8 without BOM (Byte Order Marks), many editors can silently include BOM and cause issues.

- Do your changes and commit:
```
git commit -am "commit message"
```
- Push your changes
```
git push origin your_branch_name
```
- Go to the original repo on GitHub and click on the green compare & pull request button
- Click on 'create pull request'
- Congrats!
