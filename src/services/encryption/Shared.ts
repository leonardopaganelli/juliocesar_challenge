export const decriptMessage = (encryptedMessage: string, ticks: number): string => {
    const result = encryptedMessage.toLowerCase().split("").map((letter) => {
        if (new RegExp("[a-zA-Z]").test(letter)) {
            const charCode = letter.charCodeAt(0);
            const resetAlphabet = charCode < 103 ? 26 : 0;

            return String.fromCharCode(charCode + resetAlphabet - ticks);
        } else {
            return letter;
        }
    }).join("");

    return result;
};