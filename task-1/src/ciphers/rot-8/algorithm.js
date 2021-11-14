import { shiftCharacter } from '../utilities'

export function encode(string) {
  return string.split('').map((character) => shiftCharacter(character, 8)).join('')
}

export function decode(string) {
  return string.split('').map((character) => shiftCharacter(character, -8)).join('')
}
