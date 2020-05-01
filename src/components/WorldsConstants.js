export default WorldsConstants = {
  WORLDS_BG_COLOR: '#967ECB',


  WORLDS: [
    {
        title:"Fire World",
        text: "0/10", //TODO: change to state of lessons completion
        index: 1, //TODO: use this to navigate to the right game for each world
        icon: require('../assets/worlds/fire-world.png'),
        unlocked: true,

    },
    {
        title:"Ice World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 2,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,

    },
    {
        title:"Jungle World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 3,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,

    },
    {
        title:"Alien World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 4,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,

    },

  ],




};
