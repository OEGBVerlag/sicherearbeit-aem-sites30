const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.tsx',
    './src/**/*.html',
    '../../ui.apps/**/*.html',
    './src/**/*.scss',
    '../../common/ui.frontend/components/src/**/*.tsx',
  ],
  theme: {
    screens: {
      sm: '767px',
      md: '992px',
      lg: '1024px',
    },
    fontFamily: {
      body: ['Istok', 'sans-serif'],
      headline: ['Istok', 'sans-serif'],
      menu: ['Istok', 'sans-serif'],
    },
    fontSize: {
      xxxs: '10px',
      xxs: '12px',
      xs: '14px',
      s: '16px',
      default: '18px',
      m: '20px',
      l: '22px',
      xl: '26px',
      xxl: '30px',
      xxxl: '36px',
      xxxxl: '60px',
      xxxxxl: '90px',

      // Header sizes
      h1: '37px',
      h2: '30px',
      h3: '25px',
      h4: '22px',
      h5: '20px',
      h6: '16px',
      'desktop-h1': '37px',
      'desktop-h2': '30px',
      'desktop-h3': '25px',
      'desktop-h4': '22px',
      'desktop-h5': '20px',
      'desktop-h6': '16px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    borderRadius: {
      default: '0.25rem',
      full: '100%',
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#080808',

        primary: '#007EC5',
        background: '#ffffff',

        gray: {
          0: '#484848',
          1: '#656565',
          2: '#8E8E8E',
          3: '#D9D9D9',
          4: '#f5f8fa',
        },

        //interactive
        'interactive-state-hover-button': '#10385e',
        'interactive-state-hover-link': '#10385e',
      },
      spacing: {
        '1/2': '0.125rem',
        'component-spacing-small': '0.5rem',
        'component-spacing': '1.5rem',
        'component-spacing-big': '3rem',
      },
      width: {
        'max-site': '1500px',
        '1/4': 'calc(25% - 20px)',
        '1/3': 'calc(33.33333333% - 16px)',
        '1/2': 'calc(50% - 16px)',
        '2/3': 'calc(66.66666667% - 16px)',
        'table-1/4': 'calc(25% - 22.5px)',
        'table-1/3': 'calc(33.333333333% - 20px)',
        'table-1/2': 'calc(50% - 15px)',
        'fit-content': 'fit-content',
      },
      height: {
        'mobile-menu': 'calc(100vh - 69px)',
      },
      minWidth: {
        3: '0.75rem',
        4: '1rem',
      },
      maxWidth: {
        site: '1500px',
        article: '1000px',
        'narrow-site': '882px',
      },
      transitionProperty: {
        width: 'width',
      },
      zIndex: {
        100: '100',
      },
      letterSpacing: {
        default: '0.125rem',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
  },
}
