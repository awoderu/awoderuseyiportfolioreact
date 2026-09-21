import images from './images';


const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const gallery = [
  {
    image: images.gallery05,
    title: 'DLAB MEDICARE RESPONSIVE WEBSITE',
    link: 'https://dlabmed.vercel.app/',
  },
  {
    image: images.gallery03,
    title: 'LUXURY RESTURAUNT RESPONSIVE SITE',
    link: 'https://luxuryrestuarant.vercel.app/',
  },
  {
    image: images.appleweb,
    title: '3D Apple website',
    link: 'https://3dapplewebappclone-2y91b2rdc-acme-ecf0.vercel.app/',
  },
  {
    image: images.cswebapp,
    title: 'CRYSTAL STUDIOS STORE',
    link: 'https://crystalstudioswebsite.vercel.app/',
  },
  {
    image: images.qrcode,
    title: 'QR CODE GENERATOR',
    link: 'https://ourkitchenwebsite.vercel.app/',
  },
];


export default { wines, cocktails, awards, gallery };




