export const MENU_ITEMS: MenuItemStructure[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Examples',
    link: '/examples',
    subMenu: [
      { link: '/examples/props', title: 'Props' },
      { link: '/examples/state', title: 'State' },
      { link: '/examples/context', title: 'Context' },
      { link: '/examples/navigation', title: 'Navigation' },
      { link: '/examples/use-effect', title: 'UseEffect' },
      { link: '/examples/fetch', title: 'Fetch' },
      { link: '/examples/axios', title: 'Axios' },
      { link: '/examples/local-storage', title: 'LocalStorage' },
      { link: '/examples/react-redux', title: 'ReactRedux' },
      { link: '/examples/redux-toolkit', title: 'ReduxToolkit' },
      { link: '/examples/infinite-scroll', title: 'InfiniteScroll' },
    ],
  },
  {
    title: 'GitHub',
    link: 'https://github.com/Rurien1124',
  },
];

type MenuItemStructure = {
  title: string;
  link: string;
  subMenu?: MenuItemStructure[];
};
