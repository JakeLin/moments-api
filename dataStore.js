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
      photos: ['https://i.morioh.com/210323/d1a235fe.webp'],
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
      isLiked: true,
      likes: [{id: '0', avatar: 'https://avatars0.githubusercontent.com/u/573856?s=460&v=4'},
              {id: '105', avatar: 'https://randomuser.me/api/portraits/women/69.jpg'}],
    },
  ]
}

module.exports = {
  momentsDetails
};
