function truncateString(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text; // Возвращаем исходный текст, если он уже короче или равен maxLength
    }

    const truncatedText = text.slice(0, maxLength); // Обрезаем текст до maxLength символов

    // Ищем последний символ предложения в обрезанной строке
    const lastSentenceIndex = truncatedText.lastIndexOf('.');

    if (lastSentenceIndex !== -1) {
        // Если найден символ ".", обрезаем строку до последнего предложения
        return truncatedText.slice(0, lastSentenceIndex + 1);
    }

    // Если не найдено ни одного символа ".", возвращаем обрезанную строку без разделения на предложения
    return truncatedText;
}


function fixedFetchedText(text: string): string {
    let newText = text
        .replace(/\\n+/g, " ") // Убираем перенос на следующую строку
        .replace(/—/g, "-").replace(/–/g, "-") // Убираем длинные тире
        .replace(/\s+/g, " ").trim() // Убираем лишние пробелы

    newText = truncateString(newText, 500)

    return newText
}
export default fixedFetchedText;