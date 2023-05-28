function isRussianLetter(char: string) {
    return /^[А-Яа-яЁё]$/.test(char);
}

export default isRussianLetter;