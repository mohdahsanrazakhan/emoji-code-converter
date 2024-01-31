import emojiMap from './emojiMap.js'

export default function convertEmojiCodes(sentence) {
  // Iterate through each key in the emojiMap object
  for (const key in emojiMap) {
    if (Object.hasOwnProperty.call(emojiMap, key)) {
      // Create a regular expression to match the key in the sentence
      const regEx = new RegExp(`\\${key}\\b`, 'g');
      // Replace the key with its corresponding value in the sentence
      sentence = sentence.replace(regEx, emojiMap[key]);
    }
  }
  console.log(sentence);
}