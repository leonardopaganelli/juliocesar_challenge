import request from "request-promise";

export const getChallenge = async (profileToken: string): Promise<IChallengeMessage> => {
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${profileToken}`;
    const response = await request(url);
    return JSON.parse(response);
};