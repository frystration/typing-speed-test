function fixedFetchedText(text: string): string {
    const newText = text
        .replace(/\\n+/g, " ") // Убираем перенос на следующую строку
        .replace(/—/g, "-").replace(/–/g, "-") // Убираем длинные тире
        .replace(/\s+/g, " ").trim() // Убираем лишние пробелы

    return newText
}
export default fixedFetchedText;