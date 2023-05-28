function isEnglishLetter(char: string) {
    return /^[A-Za-z]$/.test(char);
}

export default isEnglishLetter;