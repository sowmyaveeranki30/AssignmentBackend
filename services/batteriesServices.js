const dataPath = "./batteries.json";
import fs from "fs";

const errObject = {
  status: "",
  message: "",
  phase: "",
};

export const saveBatteriesData = (data) => {
  try {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
  } catch (error) {
    errObject.status = 500;
    errObject.message = "Error in saving data please try again";
    errObject.phase = "Write service phase";
    throw errObject;
  }
};

export const getBatteriesData = () => {
  try {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
  } catch (error) {
    errObject.status = 500;
    errObject.message = "Error in reading data please try again";
    errObject.phase = "Read service phase";
    throw errObject;
  }
};

