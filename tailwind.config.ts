/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const { nextui } = require('@nextui-org/react')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px'
		},
		fontSize: {
			'48': ['48px', '140%'],
			'40': ['40px', '140%'],
			'32': ['32px', '140%'],
			'24': ['24px', '140%'],
			'20': ['20px', '140%'],
			'18': ['18px', '140%'],
			'16': ['16px', '140%'],
			'14': ['14px', '140%'],
			'12': ['12px', '140%'],
			'10': ['10px', '140%']
		},
		extend: {
			colors: {
				transparent: 'transparent',
				white: 'rgb(255, 255, 255)',
				grey: 'rgb(128, 128, 128)',
				black: 'rgb(0, 0, 0)',
				error: 'rgb(194, 19, 19)',
				success: 'rgb(50, 164, 106)',
				primary: '#ffffff',
				secondary: '#000000',
				g100: '#F6F7F9',
				g200: '#efefef',
				g300: '#ebebeb',
				g400: '#e0e0e0',
				g500: '#B5B9C5',
				g600: '#a5a5a5',
				g700: '#969696',
				g800: '#848484',
				g900: '#6d6d6d',
				g1000: '#5f5f5f',
				g1100: '#4b4b4b',
				g1200: '#383838',
				g1300: '#242424',
				g1400: '#1b1b1b',
				g1500: '#121212'
			},
			width: {
				'4': '4px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'20': '20px',
				'24': '24px',
				'28': '28px',
				'32': '32px',
				'36': '36px',
				'40': '40px',
				'44': '44px',
				'48': '48px',
				'52': '52px',
				'56': '56px',
				'60': '60px',
				'64': '64px',
				'72': '72px',
				'80': '80px',
				'100': '100px',
				'120': '120px'
			},
			borderRadius: {
				'1': '2px',
				'2': '4px',
				'3': '6px',
				'4': '8px',
				'5': '10px',
				'6': '12px',
				'7': '16px',
				'8': '20px',
				'9': '24px',
				'10': '32px'
			},
			spacing: {
				layout: '20px',
				'4': '4px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'20': '20px',
				'24': '24px',
				'28': '28px',
				'32': '32px',
				'36': '36px',
				'40': '40px',
				'44': '44px',
				'48': '48px',
				'52': '52px',
				'56': '56px',
				'60': '60px',
				'64': '64px',
				'72': '72px',
				'80': '80px',
				'100': '100px',
				'120': '120px'
			}
		}
	},
	darkMode: 'class',
	plugins: [
		plugin(function ({ addUtilities }: any) {
			addUtilities({
				'.pos-50-50': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}
			})
		}),
		plugin(function ({ addUtilities }: any) {
			addUtilities({
				'.pos-y-50': {
					position: 'absolute',
					top: '50%',
					transform: 'translateY(-50%)'
				}
			})
		}),
		plugin(function ({ addUtilities }: any) {
			addUtilities({
				'.pos-x-50': {
					position: 'absolute',
					left: '50%',
					transform: 'translateX(-50%)'
				}
			})
		}),
		nextui({
			themes: {
				light: {
					colors: {
						background: '#FFFFFF', // or DEFAULT
						foreground: '#222222', // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: '#222222',
							DEFAULT: '#353535'
						}
						// ... rest of the colors
					}
				},
				dark: {
					colors: {
						background: '#222222', // or DEFAULT
						foreground: '#FFFFFF', // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: '#353535',
							DEFAULT: '#353535'
						}
					}
					// ... rest of the colors
				}
				// mytheme: {
				// 	// custom theme
				// 	extend: 'dark',
				// 	colors: {
				// 		primary: {
				// 			DEFAULT: '#BEF264',
				// 			foreground: '#000000'
				// 		},
				// 		focus: '#BEF264'
				// 	}
				// }
			}
		})
	]
}
