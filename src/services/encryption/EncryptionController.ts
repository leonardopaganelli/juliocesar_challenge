import sha1 from "sha1";
import { getChallenge } from "./providers/CodeNationDataProvider";

export const solveChallenge = async (profileToken: string) => {
    const challenge =  await getChallenge(profileToken);

    challenge.decifrado = decriptMessage(challenge.cifrado, challenge.numero_casas);;
    challenge.resumo_criptografico = encryptSHA1(challenge.decifrado);

    return challenge;
};

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

export const encryptSHA1 = (messageToEncrypt: string): string => {
    return sha1(messageToEncrypt);
};
