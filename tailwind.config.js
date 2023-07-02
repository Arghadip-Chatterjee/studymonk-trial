/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

