import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark', // this will inherit the base properties of Storybook's dark theme
  brandTitle: 'Aerial UI',
  brandImage:
    'https://res.cloudinary.com/dmhg6tbrk/image/upload/c_scale,w_128/v1689845925/logo-aerial_zx3efc.svg',
});

addons.setConfig({
  theme,
});
