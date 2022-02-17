const configDict = {
  development: {
    baseURL: "http://localhost:4000"
  },
  production: {
    baseURL: "http://localhost:4000"
  }
};

const currentConfigKey = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "development";

const configObj = {
  isDevelop: isDev || isTest,
  ...configDict[currentConfigKey],

  canvasH5Width: 384,
  canvasH5Height: 682,
  pageModeList: [
    {
      value: "h5",
      label: "视频",
      disabled: false
    }
  ]
};

export default configObj;
