# online-reading-tutor
Prototype for new user experience in reading app for dyslexic students.

## Prerequisites Downloads

### node.js & watchman

```sh
brew install node
brew install watchman
```

### yarn package manager

```sh
brew install yarn
```

### xcode 
Get it from the Mac App store (download and configuring will take < 30 mins)
Make sure to also install command line tools and a device simulator (see https://reactnative.dev/docs/environment-setup).

### cocoapods

```sh
sudo gem install cocoapods
```

## Quick Start

First fork the repo. Go to your fork of the project and clone it.
Navigate into the directory. Run yarn to install the node_modules folder.


```sh
git clone https://github.com/<yourusername>/online-reading-tutor.git
cd online-reading-tutor
yarn
```

Don't forget to add the original repo as the upstream 

```sh
git remote add upstream https://github.com/Dyslexia-Done/online-reading-tutor.git

```


## Running the Project

in the root directory:
```sh
yarn ios
```

**if the above command does not work try running:**
```sh
cd ios
pod install
cd ..
yarn ios
```



## Project Structure


### Screens
all the screen components are in src/screens.

### Styles
this folder is for all the styles for the different parts of the application.

### Components
this folder is for smaller components that are shared across the app (buttons, headers, etc).



## Pull requests

Before submitting code for a pull request run:

```sh
yarn prettier --write <complete-path-to-file-name>
```

```sh
yarn lint
```

to use the ESlint in your files and fix any of the errors in the console.
Tag 2 reviewers for each pull request.
