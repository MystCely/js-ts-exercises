const model = {
  app: {
    currentPage: 'homePage', //activityPage, profilePage
  },

  viewState: {
    //viewState per side
    homePage: {
      filter: {
        categories: ['Fjell'],
        difficulty: [1, 2, 3, 4, 5],
      },
      categories: ['Vinter', 'Sommer', 'Høst', 'Vår'],
      post: {
        userName: 'sondre',
        title: 'Gå på ski',
        image: 'ski.png',
        descriptions: 'ski ski ski',
        favorites: true,
        ratings: 3,
        difficulty: 4,
        comments: '',
      },
      search: '',
    },
    profilePage: {
      profilePic: 'pfp.png',
      userName: 'sondre',
      favorites: ['Fisking'],
      activity: ['Fisking', 'Kajakk', 'Alpin'],
    },
    activityPage: {
      difficulty: 5,
      estimatedTime: 6 + 'hrs',
      descriptions: 'Hærlig tur! Ikke forvent noe fangst så ta med egen grillmat!',
      ratings: 3,
      img1: 'FishingRod.png',
      img2: 'HappyGuy.png',
      categories: ['Skogstur', 'Vinter', 'Sommer', 'Klatring', 'Skitur', 'Sykkeltur', 'Fjelltur'],
    },
    // logInPage
    // registerPage
  },

  //data
  user: {
    userName: '',
    password: '',
  },
  profile: {
    profilePic: '',
    favorites: [''],
    activity: [''],
    followers: 0,
  },
  post: {
    user: '',
    img: '',
    title: '',
    description: '',
    ratings: 0,
    difficulty: 0,
    favorites: false,
    estimatedTime: 0 + 'hrs',
    category: '',
    comments: '',
  },
};
