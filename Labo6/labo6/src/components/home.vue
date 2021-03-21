<template>
  <div class="container">
    <div class="weather-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      Meteo - 12h
      <headerV :city="blocks.city_name" :country="blocks.country_code" />
    </div>
    <div class="cardList">
      <div class="card-container">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <weatherCard
            v-for="dat in blocks.data"
            :key="dat.wind_spd"
            :hour="dat.timestamp_local[11] + dat.timestamp_local[12]"
            :temperature="dat.temp"
            :clouds="dat.clouds"
            :wind="dat.wind_cdir"
            :windSpeed="dat.wind_spd"
            :precip="dat.precip"
            :pressure="dat.pres"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weatherCard from "./weatherCard";
import headerV from "./header";
import Api from "../api";
const api = new Api();

export default {
  name: "cardList",
  components: {
    weatherCard,
    headerV,
  },
  data() {
    return {
      blocks: [],
    };
  },
  beforeMount() {
    this.getBounds();
  },
  methods: {
    async getBounds() {
      try {
        const coordinates = await this.$getLocation({
          enableHighAccuracy: true,
        });
        const { lat, lng } = coordinates;
        this.blocks = await api.getData(lat, lng);
        this.noLocation = false;
      } catch (error) {
        this.noLocation = true;
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 960px;
  background-color: royalblue;
}

.weather-header {
  max-width: 700px;
  font-size: 50px;
  color: white;
}
</style>
