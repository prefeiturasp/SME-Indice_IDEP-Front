let API_URL = "API_URL_REPLACE_ME";


if (process.env.NODE_ENV === "development") {
  API_URL = process.env.REACT_APP_API_URL;
}

const CONFIG = {
  API_URL: API_URL
};

export default CONFIG;
