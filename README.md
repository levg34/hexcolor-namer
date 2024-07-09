# HexColorNamer

[![npm version](https://badge.fury.io/js/hexcolor-namer.svg)](https://www.npmjs.com/package/hexcolor-namer)
[![Build Status](https://travis-ci.com/levg34/hexcolor-namer.svg?branch=main)](https://travis-ci.com/levg34/hexcolor-namer)
[![License](https://img.shields.io/npm/l/hexcolor-namer)](https://github.com/levg34/hexcolor-namer/blob/main/LICENSE)

HexColorNamer is an npm library that provides human-readable names for hexadecimal colors. It's inspired by Chirag Mehta's [Name that Color](https://chir.ag/projects/ntc/) project and extends its functionality to publish it as an npm library, and support additional languages, including French.

## Features

- Convert hexadecimal color codes (e.g., "#FF5733") to descriptive color names (e.g., "Cinnabar"), or the nearest known color.
- Supports multiple languages, including English and will support French in the future.
- Lightweight and easy to use.

## Installation

Install HexColorNamer using npm, pnpm, bun, etc:

```bash
npm install hexcolor-namer
```

I am using Bun to develop this library, but of course you can use any package manager you like.

```bash
bun add hexcolor-namer
```

## Usage

```javascript
const { getColorName } = require('hexcolor-namer');

const colorCode = '#FF5733';
const { name: colorName, nearestMatching, exactMatch } = getColorName(colorCode);

console.log(`Color ${colorCode} is named "${colorName}"`);
```

## Credits

HexColorNamer is inspired by Chirag Mehta's [Name that Color](https://chir.ag/projects/ntc/) project. Special thanks to Chirag for his work and permission to create this TypeScript version.

## License

This project is licensed under the GNU v3 License - see the [LICENSE](LICENSE) file for details.
