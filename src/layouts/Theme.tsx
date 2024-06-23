const DEFAULT_OFFSET = '0.5rem'

const theme = {
  palette: {
    primary: '#00b2ff',
    secondary: '#777',
    success: '#3adb76',
    warning: '#ffae00',
    alert: '#ec5840',
    anchor: '#1DAFEC',
    darkBlue: '#5369b1',
    darkPrimary: '#AB1D4D',
  },
  topBar: {
    lineHeight: '87px',
  },
  breakpoints: {
    small: 0,
    medium: '640px',
    large: '1024px',
    xlarge: '1200px',
    xxlarge: '1440px',
  },
  topbarPadding: DEFAULT_OFFSET,
}

export type ThemeType = typeof theme

export default theme
