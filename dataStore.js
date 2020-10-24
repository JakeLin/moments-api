const moment = require('moment');

const momentsDetails = {
  userDetails: {
    id: 0,
    name: 'Jake Lin',
    avatar: 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4',
    backgroundImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
  },
  moments: [
    {
      id: 0,
      userDetails:  {
        id: 1,
        name: 'Taylor Swift',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk0dgrwcQ0FiTKdgR3atzstJ_wZC4gtPgOmUYBsLO2aa9ssXs',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk0dgrwcQ0FiTKdgR3atzstJ_wZC4gtPgOmUYBsLO2aa9ssXs'
      },
      type: 'PHOTOS',
      title: null,
      url: null,
      photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'],
      createdDate: moment().subtract(25, 'm'),
    },
    {
      id: 1,
      userDetails:  {
        id: 2,
        name: 'Mattt',
        avatar: 'https://pbs.twimg.com/profile_images/969321564050112513/fbdJZmEh_400x400.jpg',
        backgroundImage: 'https://pbs.twimg.com/profile_images/969321564050112513/fbdJZmEh_400x400.jpg'
      },
      type: 'PHOTOS',
      title: 'Low-level programming on iOS',
      url: null,
      photos: ['https://i.pinimg.com/originals/15/27/3e/15273e2fa37cba67b5c539f254b26c21.png'],
      createdDate: moment().subtract(2, 'd'),
    }
  ]
}

module.exports = {
  momentsDetails
};
