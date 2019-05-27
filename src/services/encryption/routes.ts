import { Request, Response } from "express";
import { solveChallenge } from "./ChallengEncryptionController";
import { generateChallenge, solvesolveCustomChallenge } from "./CustomEncryptionController";

export default [
  {
    path: "/api/v1/decript",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result = await solveChallenge(req.query.profileToken);

        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/api/v1/custom/decript",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const message = req.query.encryptedMessage;
        const ticks = req.query.encryptedMessage;

        const result = await solvesolveCustomChallenge(req.query.encryptedMessage, req.query.ticks);

        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/api/v1/custom/generateChallenge",
    method: "get",
    handler: [
      (req: Request, res: Response) => {
        const result = generateChallenge(req.query.messageToEncrypt);

        res.status(200).send(result);
      }
    ]
  }
];
