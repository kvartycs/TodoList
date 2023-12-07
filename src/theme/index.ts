import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

const overriding = {
  styles,

  colors: {
    blue_AC: '#AC94EE',
    blue_AC_20: 'rgba(172, 148, 238, 0.2)',
    blue_2C: '#2C3862',
    blue_2C_20: 'rgba(44, 56, 98, 0.20)',
    blue_2A: '#2A5AF6',
    blue_53: '#537BFF',
    blue_D6: '#D6E1F6',
    blue_89: '#8993F1',
    blue_37: '#3761EA',
    grey_89: '#898E99',
    grey_D4: '#D4D9E2',
    grey_ED: '#EDEFF3',
    grey_F5: '#F5F5F7',
    white_FC: '#FCFCFC',
    white_FF: '#FFFFFF',
    white_E3: '#E3E5E9',
    green_7E: '#7ECE3F',
    green_75: '#75C734',
    green_7E_20: 'rgba(126, 206, 63, 0.2)',
    green_D3: '#D3E76F',
    purple_BA: '#BAA1FF',
    purple_AC: '#AC94EE',
    purple_C9: '#C9D5FD',
    yellow_FE: '#FEC943',
    yellow_FE_20: 'rgba(254, 201, 67, 0.2)',
    yellow_D3: '#D3E76F',
    yellow_F8: '#F8C030',
    yellow_FF: '#FFBF85',
    yellow_FFD: '#FFD362',
    red_F5: '#F56464',
    red_F5_20: 'rgba(245, 100, 100, 0.2)',
    red_EF: '#EF767A',
    red_FF: '#FFACAC',
    black_22: '#222222',
    black_00_40: 'rgba(0, 0, 0, 0.4)',
    black_00_05: 'rgba(0, 0, 0, 0.05)',
    black_00_04: 'rgba(0, 0, 0, 0.04)',
  },

  shadows: {
    base: '0px 2px 3px 0px var(--chakra-colors-black_00_04)',
  },

  breakpoints: {
    tablet: '768px',
    netbook: '1024px',
    laptop: '1280px',
    desktop: '1440px',
  },
};

export default extendTheme(overriding);
