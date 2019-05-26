import { Request, Response } from "express";
import { solveChallenge } from "./EncryptionController";

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
  }
];
