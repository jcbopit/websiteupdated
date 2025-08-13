import { extendTheme } from '@chakra-ui/react'

// Ghibli-inspired dark-only theme with flower pastel accents
const styles = {
  global: {
    body: {
      bg: '#1c1f1c',       // deep forest night (dark background)
      color: '#eae4d3',    // gentle cream text
      fontSize: '16px',
      lineHeight: '1.6',
    },
  },
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: ['22px', '24px', '26px'], // responsive sizing
        textUnderlineOffset: 6,
        textDecorationColor: '#e0dab0', // golden mossy underline
        textDecorationThickness: 2,
        marginTop: 4,
        marginBottom: 6,
        fontWeight: 700,
        color: '#faf5d5', // gentle paper cream text
      },
    },
    baseStyle: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#faf5d5',
      lineHeight: '1.3',
    },
  },
  Link: {
    baseStyle: {
      color: '#8cddb2',  // stronger soft green
      fontWeight: '600',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      textDecorationColor: '#5ba784',  // subtle underline green
      textDecorationThickness: 1.5,
      _hover: {
        color: '#deb0e7', // pastel purple pink on hover
        textDecorationThickness: 2,
        textDecorationColor: '#f4d9ff', // softer pastel underline on hover
      },
      _focus: {
        boxShadow: 'none',
        outline: '2px solid',
        outlineColor: '#8ff1a1',
      },
    },
  },
  Text: {
    baseStyle: {
      color: '#eae4d3',
      fontSize: '16px',
      lineHeight: '1.6',
    },
  },
  Button: {
    baseStyle: {
      _focus: { boxShadow: 'none' },
    },
    variants: {
      solid: {
        bg: '#4e695c', // twilight green
        color: '#f5f5f0',
        _hover: {
          bg: '#5b8371',
        },
      },
    },
  },
}

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
}

const colors = {
  ghibli: {
    leaf: '#a8d5ba',
    moss: '#6c7156',
    bark: '#4e4e32',
    sky: '#cce3dc',
    sunset: '#f7dba7',
    cream: '#fefae0',
    rose: '#e4b1ab',
    mist: '#e8f5e9',
    night: '#1c1f1c',
    moon: '#faf5d5',
    spirit: '#d4f2e7',
    blossom: '#f2d5e6',
    lavender: '#cbb7dd',
    peach: '#f7dac9',
    skyBlush: '#e9e6f2',
    fern: '#8bac81',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
