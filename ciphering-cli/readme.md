# Ciphering CLI Tool

## Run

CLI can be used using `yarn` or plain `node`:

```bash
# yarn
yarn start -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

# node
node --experimental-specifier-resolution=node src -c C1-C1-R0-A -i ./input.txt -o ./output.txt
```

### Configuration

CLI accepts 3 options (alias and full name):

#### -c, --config

Config is a string with pattern `{XY(-)}n`, where:

- X is a cipher mark:
  - C is for Caesar cipher (with shift 1)
  - A is for Atbash cipher
  - R is for ROT-8 cipher
- Y is flag of encoding or decoding (mandatory for Caesar and ROT-8 and should not be passed to Atbash)
  - 1 is for encoding
  - 0 is for decoding

#### -i, --input

Path to input file.

#### -o, --output

Path to output file.

For example, config `C1-C1-R0-A` means "encode by `Caesar`, next encode by `Caesar`, next decode by `ROT-8`, next use `Atbash`".

### Tests

To run tests, execute:

```bash
# yarn
yarn test

# yarn with coverage
yarn test:coverage
```
