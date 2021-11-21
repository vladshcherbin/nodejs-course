import { shiftCharacter } from '../utilities'

export function encode(string) {
  return string.split('').map((character) => shiftCharacter(character, 1)).join('')
}

export function decode(string) {
  return string.split('').map((character) => shiftCharacter(character, -1)).join('')
}
