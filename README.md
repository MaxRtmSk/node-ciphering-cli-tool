# Node ciphering CLI tool

This is a command line (CLI) application. It encodes/decodes text using: 
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). 
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)
  
Only English alphabet letters are encrypted, all other characters kept untouched. Shift can be greater than alphabet lenth, lower than zero. Input text could be from input file or `stdin`, output could be written to output file or `stdout`.


## How to Install

1. Clone this repo to your computer:
```bash
git clone https://github.com/ratomsky/node-ciphering-cli-tool.git
```


<br>

## How to Use

You can сreate two files somewhere with the txt extension
  
  the first file will take text
  the third file will save decode or encode text  

```
  node node-ciphering-cli-tool (Options)
```

### Options 

CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

### Restrictions and rules

- Only English letters will be encrypted. Everything else will go as it is.
- If you don't provide input file path, app will ask you to type text for encrypting. You could provide as many
  strings as you want. For exiting from the process, please, press `Ctrl + C` on your keyboard.
- If you don't provide output file path, app will show encrypted text in console.
  

<br>

## 🔨 Examples

```bash
$ node node-ciphering-cli-tool -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node node-ciphering-cli-tool -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node node-ciphering-cli-tool -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node node-ciphering-cli-tool -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`



&nbsp;
##### Author: [Max <@ratomsky>](https://github.com/ratomsky/)