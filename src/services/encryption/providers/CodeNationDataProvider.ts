import request from "request-promise";

export const getChallenge = async (profileToken: string): Promise<IDecryptMessage> => {
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${profileToken}`;
    const response = await request(url);
    return JSON.parse(response);
};