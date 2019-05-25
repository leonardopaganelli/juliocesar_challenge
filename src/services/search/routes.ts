import { Request, Response } from "express";
import { checkSearchParams } from "../../middleware/checks";
import { getPlacesByName } from "./SearchController";

export default [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                const result = await getPlacesByName(query.q);
                res.status(200).send(result);
            }
        ]
    }
];