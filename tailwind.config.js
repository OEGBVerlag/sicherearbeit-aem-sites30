module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.tsx',
    './src/**/*.scss'
  ],
  theme: {
    screens: {
      sm: '767px',
      md: '992px',
      lg: '1024px',
    },
    fontFamily: {
      body: ['Nunito', 'sans-serif'],
      headline: ['OpenSans', 'sans-serif'],
      menu: ['OpenSans', 'sans-serif'],
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

      // Header sizes
      h1: '50px',
      h2: '42px',
      h3: '30px',
      h4: '24px',
      h5: '20px',
      h6: '16px'
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
        black: '#000000',

        primary: '#AB0F1F',
        background: '#F4F4F4',
        headlineRed: '#A60113',

        gray: {
          0: '#484848',
          1: '#656565',
          2: '#8E8E8E',
          3: '#D9D9D9',
        },

        //interactive
        'interactive-state-hover': '#B10000',
      },
      spacing: {
        '1/2': '0.125rem',
        'default': '1.5rem',
        'double': '3rem'
      },

      maxWidth: {
        site: '1252px',
      }
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
  },
}
