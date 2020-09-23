import config from "../config";

class Api {
  private urlRoot: string;
  private defaultOptions: {};

  constructor() {
    this.urlRoot = `${config.apiRoot}`;
    this.defaultOptions = {
      redirect: "follow",
    };
  }

  async get(path: string = "", params: {} = {}, options?: RequestInit) {
    let url = `${this.urlRoot}${path}`;
    if (Object.keys(params).length > 0) {
      const urlParams = new URLSearchParams(params);
      url = `${url}?${urlParams.toString()}`;
    }

    try {
      const response = await fetch(url, {
        ...this.defaultOptions,
        ...options,
      });
      if (!response.ok) {
        throw new Error("Bad request");
      }
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }
}

const api = new Api();
export default api;
