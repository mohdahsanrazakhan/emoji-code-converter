# Emoji Code Converter
The emoji-code-converter provides a convenient utility for converting emoji codes to their corresponding Unicode characters. With a simple function call, developers can seamlessly transform emoji codes within text strings into expressive Unicode emojis, enriching the user experience across various applications and platforms. 

## Installation
You can install the package via [npm](https://www.npmjs.com/):
```
npm install emoji-code-converter
```

## Usage

1. **Import the package in your `.mjs` file:**
```
import convertEmojiCodes from 'emoji-code-converter';
```

2. **Define a sentence with emoji codes:**
```
let sentence = ":smiling_face_with_sunglasses: When you finally fix that bug after hours of debugging :bug, and the code runs perfectly on the first try :rocket.";
```

3. **Call the function to replace emoji codes:**
```
convertEmojiCodes(sentence);
```

4. **Console output:**
```
😎: When you finally fix that bug after hours of debugging 🐛, and the code runs perfectly on the first try 🚀.
```

Enjoy converting emoji codes with ease!