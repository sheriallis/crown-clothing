const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1474432420717-75023248d5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1551351731-8e3efad58b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
