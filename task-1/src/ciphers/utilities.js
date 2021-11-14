function modulus(x, y) {
  return x - y * Math.floor(x / y)
}

export const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCodePoint(65 + index))

export function shiftCharacter(character, shift) {
  const upperCaseCharacter = character.toUpperCase()

  if (alphabet.includes(upperCaseCharacter)) {
    const index = alphabet.indexOf(upperCaseCharacter)
    const shiftedCharacter = alphabet[modulus(index + shift, alphabet.length)]

    return character === upperCaseCharacter
      ? shiftedCharacter
      : shiftedCharacter.toLowerCase()
  }

  return character
}
