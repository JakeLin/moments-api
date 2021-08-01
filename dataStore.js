const moment = require('moment');

const momentsDetails = {
  userDetails: {
    id: '0',
    name: 'Jake Lin',
    avatar: 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4',
    backgroundImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
  },
  moments: [
    {
      id: '0',
      userDetails:  {
        id: '1',
        name: 'Taylor Swift',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk0dgrwcQ0FiTKdgR3atzstJ_wZC4gtPgOmUYBsLO2aa9ssXs',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk0dgrwcQ0FiTKdgR3atzstJ_wZC4gtPgOmUYBsLO2aa9ssXs'
      },
      type: 'PHOTOS',
      title: null,
      url: null,
      photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'],
      createdDate: moment().subtract(2, 'm').unix(),
      isLiked: false,
      likes: [{id: '100', avatar: 'https://images.generated.photos/SZ43KV-Oo26-wpPUM7zDLo19CpGFH0eBnjegQFtvaUc/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA4/NTUzMzguanBn.jpg'},
              {id: '101', avatar: 'https://randomuser.me/api/portraits/women/68.jpg'},
              {id: '102', avatar: 'https://uifaces.co/our-content/donated/Si9Qv42B.jpg'}],
    },
    {
      id: '1',
      userDetails:  {
        id: '2',
        name: 'Mattt',
        avatar: 'https://pbs.twimg.com/profile_images/969321564050112513/fbdJZmEh_400x400.jpg',
        backgroundImage: 'https://pbs.twimg.com/profile_images/969321564050112513/fbdJZmEh_400x400.jpg'
      },
      type: 'PHOTOS',
      title: 'Low-level programming on iOS',
      url: null,
      photos: ['https://i.pinimg.com/originals/15/27/3e/15273e2fa37cba67b5c539f254b26c21.png'],
      createdDate: moment().subtract(25, 'm').unix(),
      isLiked: false,
      likes: [{id: '103', avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNjAzMTgzMV5BMl5BanBnXkFtZTcwNjU2NjA2NQ@@._V1_UY256_CR11,0,172,256_AL_.jpg'},
              {id: '104', avatar: 'https://uifaces.co/our-content/donated/fID5-1BV.jpg'},
              {id: '105', avatar: 'https://randomuser.me/api/portraits/women/69.jpg'}],
    },
    {
      id: '2',
      userDetails:  {
        id: '2',
        name: 'Swift Language',
        avatar: 'https://developer.apple.com/swift/images/swift-og.png',
        backgroundImage: 'https://developer.apple.com/swift/images/swift-og.png'
      },
      type: 'PHOTOS',
      title: "Swift 5.5 🎉 with Async/Await",
      url: null,
      photos: ['data:image/jpeg;base64,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'],
      createdDate: moment().subtract(1, 'd').unix(),
      isLiked: true,
      likes: [{id: '0', avatar: 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4'},
              {id: '104', avatar: 'https://uifaces.co/our-content/donated/fID5-1BV.jpg'}],
    },
    {
      id: '3',
      userDetails:  {
        id: '3',
        name: 'Swift UI',
        avatar: 'https://devimages-cdn.apple.com/wwdc-services/articles/images/6F49D049-3D36-4B68-B8C4-96A20A4AF5E1/2048.jpeg',
        backgroundImage: 'https://devimages-cdn.apple.com/wwdc-services/articles/images/6F49D049-3D36-4B68-B8C4-96A20A4AF5E1/2048.jpeg'
      },
      type: 'PHOTOS',
      title: 'Swift UI is awesome!!',
      url: null,
      photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_qaT2v7INBNFIOou6MFKdJCJQgXS-sLR5j6VXESd1V7DxOsRjlHiCPFqLN2IdezeIRk&usqp=CAU'],
      createdDate: moment().subtract(2, 'd').unix(),
      isLiked: false,
      likes: [{id: '0', avatar: 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4'},
              {id: '105', avatar: 'https://randomuser.me/api/portraits/women/69.jpg'}],
    },
  ]
}

module.exports = {
  momentsDetails
};
