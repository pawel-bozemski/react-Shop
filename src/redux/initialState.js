export const initialState = {
  products: {
    data: [
      {
        id: '1',
        title: 'book',
        price: 10,
        image: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '2',
        title: 'sofa',
        price: 100,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '3',
        title: 'knife',
        price: 5,
        image: 'https://images.pexels.com/photos/168804/pexels-photo-168804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '4',
        title: 'fragrance',
        price: 250,
        image: 'https://images.pexels.com/photos/161599/scent-sticks-fragrance-aromatic-161599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '5',
        title: 'Video game',
        price: 599,
        image: 'https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '6',
        title: 'Doll',
        price: 23,
        image: 'https://images.pexels.com/photos/65451/pexels-photo-65451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: [],
    total: 0,
  },
};
