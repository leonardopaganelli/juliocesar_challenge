import sha1 from "sha1";
import { getChallenge } from "./providers/CodeNationDataProvider";
import { decriptMessage } from "./shared";

export const solveChallenge = async (profileToken: string) => {
    const challenge =  await getChallenge(profileToken);

    challenge.decifrado = decriptMessage(challenge.cifrado, challenge.numero_casas);;
    challenge.resumo_criptografico = encryptSHA1(challenge.decifrado);

    return challenge;
};

export const encryptSHA1 = (messageToEncrypt: string): string => {
    return sha1(messageToEncrypt);
};
