import TeekoStore from "./teeko_store";
import WeatherStore from "./weather_store";
import CropToolStore from "./crop_tool_store";

export default class RootStore {
  constructor() {
    this.teekoStore = new TeekoStore(this);
    this.weatherStore = new WeatherStore(this);
    this.cropToolStore = new CropToolStore(this);
  }
}
