import { createStitches, ScaleValue } from '@stitches/react';

const convertToRem = (value: number) => `${value/16}rem`;

const space = {
  4: convertToRem(4),
  8: convertToRem(8),
  12: convertToRem(12),
  16: convertToRem(16),
  20: convertToRem(20),
  24: convertToRem(24),
  28: convertToRem(28),
  32: convertToRem(32),
  36: convertToRem(36),
  38: convertToRem(38),
}

export const { styled: ifoodStyled } = createStitches({
  prefix: 'stitches-app',
  theme: {
    colors: {
      black900: '#000',
      gray900: '#323232',
      gray600: '#747474',
      gray300: '#a6a6a6',
      white900: '#fff',
      white600: '#f2f2f2',

      red900: '#cc1825',
      red600: '#ea1d2c',
      red300: '#ef5753',

      'text-default': '#000',
      'text-secondary': '#323232',

      'button-primary-bg': '#ea1d2c',
      'button-primary-text': '#fff',

      'button-secondary-bg': 'transparent',
      'button-secondary-text': '#ea1d2c'
    },
    radii: {
      default: '0px',
      pill: '99999px',
    },
    space,
    sizes: space
  },
  utils: {
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  }
});

