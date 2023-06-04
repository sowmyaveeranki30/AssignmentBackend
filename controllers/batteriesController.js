import { getBatteriesData, saveBatteriesData } from "../services/batteriesServices.js";


export const getBatteries = async (req, res, next) => {
  try {
    const batteries = getBatteriesData();
    res.send(batteries);
  } catch (error) {
    return next(error);
  }
}

export const updateCount = (req, res, next) => {
  try {
    let existBatteries = getBatteriesData();
    if (req.body.count !== undefined) {
      existBatteries.data.find((e) => e.id == req.params.id).count = req.body.count;
    }
    saveBatteriesData(existBatteries);
    res.send(existBatteries);
  } catch (error) {
    return next(error);
  }
};