import * as DataObject from "./NewConstants";

export default WorldsConstants = {
  WORLDS_BG_COLOR: '#967ECB',


  WORLDS: [
    {
        title:"Fire World",
        text: DataObject.Data.lesson_completion_per_world.fire_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, //TODO: change to state of lessons completion
        index: 1, //TODO: use this to navigate to the right game for each world
        icon: require('../assets/worlds/fire-world.png'),
        unlocked: DataObject.Data.lesson_completion_per_world.fire_world["world_unlocked"],
        text: DataObject.Data.lesson_completion_per_world.fire_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.FIRE_WORLD_KEY

    },
    {
        title:"Ice World",
        text: DataObject.Data.lesson_completion_per_world.ice_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS,
        index: 2,
        icon: require('../assets/worlds/ice-world.png'),
        unlocked: DataObject.Data.lesson_completion_per_world.ice_world["world_unlocked"],
        text: DataObject.Data.lesson_completion_per_world.ice_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.ICE_WORLD_KEY

    },
    {
        title:"Water World",
        text: DataObject.Data.lesson_completion_per_world.water_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS,
        index: 4,
        icon: require('../assets/worlds/locked-world.png'),
        unlocked: DataObject.Data.lesson_completion_per_world.water_world["world_unlocked"],
        text: DataObject.Data.lesson_completion_per_world.water_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.WATER_WORLD_KEY

    },
    {
        title:"Jungle World",
        text: DataObject.Data.lesson_completion_per_world.jungle_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS,
        index: 3,
        icon: require('../assets/worlds/locked-world.png'),
        unlocked: DataObject.Data.lesson_completion_per_world.jungle_world["world_unlocked"],
        text: DataObject.Data.lesson_completion_per_world.jungle_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.JUNGLE_WORLD_KEY

    },
    {
        title:"Alien World",
        text: DataObject.Data.lesson_completion_per_world.alien_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS,
        index: 4,
        icon: require('../assets/worlds/locked-world.png'),
        unlocked: DataObject.Data.lesson_completion_per_world.alien_world["world_unlocked"],
        text: DataObject.Data.lesson_completion_per_world.alien_world["lessons_completed"] + "/" + Constants.TOTAL_LESSONS, // TODO: change to state of lessons completion
        short_key: Constants.ALIEN_WORLD_KEY

    },
  ],




};
