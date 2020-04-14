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

## Running the Project

in the root directory:
```sh
yarn start
```

in separate terminal (still in root directory):
```sh
yarn ios
```
we can run yarn web or yarn android to view other devices but iOS is all we really care about at this point.


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
[to do - import scss into components] 
this folder is for all the styles for the different parts of the application.

### Components
this folder is for smaller components that are shared across the app (buttons, headers, etc).