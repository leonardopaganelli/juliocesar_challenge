import { getPlaces } from "./providers/OpenCageDataProvider";

export const getPlacesByName = async (q: string) => {
    if (q.length < 3) {
        return {
            features: [],
            type: "FeatureCollection"
        };
    }

    return await getPlaces(q);
};