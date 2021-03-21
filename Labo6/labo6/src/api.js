export default class Api {
  constructor() {
    //this.baseKey = "d798f2ac6cc548389686e48fe846f15b";
    this.baseURL = "https://api.weatherbit.io/v2.0/forecast/hourly?";
  }

  getData = async (lat, lng) => {
    const response = await fetch(
      // `${this.baseURL}&lat=${lat}&lon=${lng}&key=${this.baseKey}&hours=12`,
      `${this.baseURL}&lat=${lat}&lon=${lng}&key=${process.env.VUE_APP_API_BASE_KEY}&hours=12`,
      {
        method: "GET",
      }
    );
    const responseJSON = response.json();
    return responseJSON;
  };
}
