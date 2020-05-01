import * as DataObject from "./NewConstants";

export default WorldsConstants = {
  WORLDS_BG_COLOR: '#967ECB',


  WORLDS: [
    {
        title:"Fire World",
        text: "0/10", //TODO: change to state of lessons completion
        index: 1, //TODO: use this to navigate to the right game for each world
        icon: require('../assets/worlds/fire-world.png'),
        unlocked: true,
        text: DataObject.Data.lesson_completion_per_world.fire_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.FIRE_WORLD_KEY

    },
    {
        title:"Ice World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 2,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,
        text: DataObject.Data.lesson_completion_per_world.ice_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.ICE_WORLD_KEY

    },
    {
        title:"Jungle World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 3,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,
        text: DataObject.Data.lesson_completion_per_world.jungle_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.JUNGLE_WORLD_KEY

    },
    {
        title:"Alien World",
        text: "0/10",//TODO: change to state of lessons completion
        index: 4,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: false,
        text: DataObject.Data.lesson_completion_per_world.alien_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.ALIEN_WORLD_KEY

    },

  ],




};
