import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      dark: string;
      black: string; 
    }
  }
}