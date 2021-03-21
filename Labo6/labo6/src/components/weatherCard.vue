<template>
  <div class="col">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{ hour }}h</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title weather-card-title">
          <small class="text-muted"></small>{{ temperature }} °C
        </h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>% Clouds: {{ clouds }}</li>
          <li>Wind: {{ wind }}, {{ windSpeed }} km/h</li>
          <li>Precip.: {{ precip }} mm</li>
          <li>Pressure: {{ pressure }} hPa</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">
          More Info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weatherCard",
  props: [
    "day",
    "hour",
    "temperature",
    "clouds",
    "wind",
    "wind-speed",
    "precip",
    "pressure",
  ],
};
</script>

<style></style>
