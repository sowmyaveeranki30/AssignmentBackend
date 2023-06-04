import { getBatteries, updateCount } from "../controllers/batteriesController.js";

export default function (router) {
    router.get('/batteries', getBatteries)
    //Update
    router.put('/updateCount/:id', updateCount);
}
