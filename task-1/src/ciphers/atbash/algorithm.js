import { alphabet } from '../utilities'

const atbashAlphabet = [...alphabet].reverse()

export default function encode(string) {
  return string.split('').map((character) => {
    const upperCaseCharacter = character.toUpperCase()

    if (alphabet.includes(upperCaseCharacter)) {
      const index = alphabet.indexOf(upperCaseCharacter)
      const atbashCharacter = atbashAlphabet[index]

      return character === upperCaseCharacter
        ? atbashCharacter
        : atbashCharacter.toLowerCase()
    }
    return character
  }).join('')
}
