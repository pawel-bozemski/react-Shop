export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: 'book',
        price: 10,
        image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 2,
        title: 'sofa',
        price: 100,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 3,
        title: 'knife',
        price: 5,
        image: 'https://images.pexels.com/photos/168804/pexels-photo-168804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 4,
        title: 'fragrance',
        price: 250,
        image: 'https://images.pexels.com/photos/161599/scent-sticks-fragrance-aromatic-161599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 5,
        title: 'Video game',
        price: 599,
        image: 'https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
