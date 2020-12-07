import '../src/stories/assets/scss/main.scss';
const customViewports = {
  iPhone678SE: {
    name: 'iPhone6,7,8,SE',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  iPad: {
    name: 'iPad',
    styles: { width: '768px', height: '1024px' }
  },
  notePC: {
    name: 'Macbook',
    styles: { width: '1152px', height: '700px' }
  },
  desktop: {
    name: 'desktop',
    styles: { width: '1440px', height: '1024px' }
  }
};

export const decorators = [
  () => ({
    template:
      '<div style="height:100vh;display: flex;justify-content:center; align-items:center;"><story /></div>'
  })
];

export const parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: 'iPhone678SE'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'base',
    values: [
      {
        name: 'base',
        value: '#EFF1F6'
      }
    ]
  }
};
