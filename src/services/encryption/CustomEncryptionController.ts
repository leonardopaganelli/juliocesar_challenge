import { decriptMessage } from "./shared";

export const solvesolveCustomChallenge = (encryptedMessage: string, ticks: number) => {
    return JSON.stringify(decriptMessage(encryptedMessage, ticks));
};

export const generateChallenge = (messageToEncrypt: string) => {
    const randomTicks = Math.floor((Math.random() * 10) + 1);
    const messageEncrypted = messageToEncrypt.toLowerCase().split("").map((letter) => {
        if (new RegExp("[a-zA-Z]").test(letter)) {
            const charCode = letter.charCodeAt(0);
            const resetAlphabet = charCode < 103 ? 25 : 0;

            return String.fromCharCode(charCode - resetAlphabet + randomTicks);
        } else {
            return letter;
        }
    }).join("");

    return { message: messageEncrypted, ticks: randomTicks };
};
