import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black_a: '#050000',
        green_a: '#499A6DCC',
        main_green: '#438d42',
        green_c: '#78BE21',
        green_d: '#C7D64F',
        green_e: '#C1DB8A',
        lightgrey: '#FBF8F5',
        main_red: '#ff0000',
        orange_a: '#FF6900',
        yellow_a: '#FFAC00',
        yellow_b: '#FFD616',
        yellow_c: '#FFED99',
        main_pink: '#FFC4C4',
        main_blue: '#002D62',
        light_blue: '#C9D7E8',
        light_green:"#CEE1CE",
        medium_blue: '#92B0CF',
        font_gray: '#545454',
        back_gray: '#F1EFEF',
        trasparent_back:'#FFFFFF28',
        disabled_gray: '#868686',
      },
      spacing: {
        '14': '3.5rem', 
      },
      height: {
        '105': '26.25rem',
      },
      width: {
        '78': '19.5rem'
      },
      flex: {
        '0': '0',
      },
    },
  },
  plugins: [nextui()],
}
export default config
