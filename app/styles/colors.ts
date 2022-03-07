interface text {
  white: string;
  dark: string;
}

interface colorList {
  primary: string;
  secondary: string;
  backgrounds: string[];
  text: text;
}

const colors: colorList = {
  primary: '#5463FF',
  secondary: '#398AB9',
  backgrounds: ['#5463FF', '#398AB9'],
  text: {
    white: 'white',
    dark: 'black',
  },
};

export default colors;
