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
      body: ['Arial', 'sans-serif'],
      headline: ['Raleway', 'Arial', 'sans-serif'],
      menu: ['Raleway', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xxs: '10px',
      xs: '14px',
      tiny: '16px',
      s: '18px',
      default: '20px',
      'default-v2': '22px',
      m: '24px',
      l: '32px',
      xl: '36px',
      xxl: '42px',
      xxxl: '60px',

      // Header sizes
      h1: '24px',
      h2: '20px',
      h3: '18px',
      h4: '16px',
      h5: '14px',
      h6: '10px',
      'desktop-h1': '32px',
      'desktop-h2': '28px',
      'desktop-h3': '24px',
      'desktop-h4': '20px',
      'desktop-h5': '18px',
      'desktop-h6': '16px',

      // Quote sizes

      'quote-author-src': '16px',
      'quote-desk': '24px',
      'quote-desk-author-src': '14px',

      // Article sizes
      'article-title': '24px',
      'article-title-desktop': '44px',
      'article-subtitle': '18px',
      'article-subtitle-desktop': '20px',
      'article-p': '18px',
      'article-p-desktop': '20px',

      // Articlelist
      'articlelist-topic': '14px',
      'articlelist-title': '24px',
      'articlelist-preview': '18px',

      //Hero Story Component
      'hero-story-topic': '14px',
      'hero-story-topic-sm': '14px',
      'hero-story-topic-lg': '14px',

      'hero-story-title': '24px',
      'hero-story-title-sm': '28px',
      'hero-story-title-lg': '32px',

      'hero-story-desc': '18px',
      'hero-story-desc-sm': '18px',
      'hero-story-desc-lg': '18px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',

      // Articlelist
      'al-topic': '700',
      'al-title': '600',
      'al-preview': '400',
    },
    borderRadius: {
      default: '0px',
      full: '100%',
    },
    extend: {
      colors: {
        // brand color
        primary: '#E20714',

        // base colors
        white: '#ffffff',
        black: '#000000',

        glass: '#EDF3F7',
        'glass-hover': '#DFE5E8',
        // glass: 'rgba(237, 243, 247, 0.7)',

        // articlelist
        'color-al-title': '#414141',
        'color-al-category': '#E20714',
        'color-al-preview': '#8A898E',

        //interactive
        'interactive-state-hover': '#C60000',

        // available gray tones from dark to light
        gray: {
          0: '#191818',
          1: '#1A1919',
          2: '#292727',
          3: '#282829',
          4: '#414241',
          5: '#474849',
          6: '#8A898E',
          7: '#AFAFB0',
          8: '#AFB0B1',
          9: '#C5C5C5',
          10: '#D8D8D8',
          11: '#D2D2D7',
          12: '#DEDFE0',
          13: '#F1F1F1',
          14: '#F2F2F2',
          15: '#F7F8F7',
          16: '#e6e6e6',
          17: '#F5F8FA',
          18: '#868686',
          19: '#6D7278',
          20: '#414141',
        },
        blue: '#CCD7E0',
        boilerplate: {
          1: '#892a12',
          2: '#282828',
        },
        //Hero Story Component
        'hero-story-topic': '#D00000',
        'hero-story-meta': '#AAAAAA',
        'light-black': '#484848',
      },
      spacing: {
        'component-spacing-small': '1.5rem',
        'component-spacing': '3rem',
        'component-spacing-big': '6rem',

        '1-1/3': '0.333333333rem',
        '2-2/3': '0.666666666rem',
        '6+2/3': '1.666666666rem',
        default: '1rem',
        page: '3.75rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        11: '2.75rem',
        14: '3.5rem',
        15: '3.75rem',
        28: '7rem',
      },
      height: {
        'article-hero-image': '610px',
        'article-hero-image': '210px',
        'article-hero-image-m': '410px',
        'article-hero-image-l': '610px',
        'articlelist-image': '180px',
        'articlelist-image-m': '196px',
        'articlelist-image-l': '212px',

        //Hero Story Component
        'hero-story-image': '180px',
        'hero-story-image-m': '330px',
        'hero-story-image-l': '440px',
      },
      width: {
        'max-site': '1440px',
        '1/4': 'calc(25% - 20px)',
        '1/2': 'calc(50% - 16px)',
        '1/3': 'calc(33.33333333% - 16px)',
        '1/2': 'calc(50% - 16px)',
        '2/3': 'calc(66.66666667% - 16px)',
        'table-1/4': 'calc(25% - 16px)',
        'table-1/3': 'calc(33.333333333% - 16px)',
        'table-1/2': 'calc(50% - 16px)',
        'fit-content': 'fit-content',
        'quote-share-icon': '36px',
      },
      minWidth: {
        3: '0.75rem',
        4: '1rem',
      },
      maxWidth: {
        site: '1440px',
        'header-logo': '90px',
      },
      maxHeight: {
        auto: 'auto',
      },
      lineHeight: {
        default: '1.5',
        '3/4': '0.75rem',
        '7/8': '0.875rem',
        'default-rem': '1rem',
        '1-1/8': '1.125rem',
        '1-1/4': '1.25rem',
        '1-1/2': '1.5rem',
        double: '2rem',
        '2-1/2': '2.5rem',
        100: '100%',

        //Hero Story Component
        'hero-story-title': '1.2',

        // Article
        'article-title': '1.5rem',
        'article-title-desktop': '3rem',
        'article-subtitle': '1.5rem',
        'article-subtitle-desktop': '1.75rem',
        'article-inline-title': '2rem',

        // Articlelist
        'al-title': '1.5rem',
        'al-preview': '1.25rem',
      },
      transitionProperty: {
        width: 'width',
      },
      gridTemplateColumns: {
        header: 'auto 50px 50px',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
  },
}
