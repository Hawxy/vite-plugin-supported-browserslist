<script setup lang="ts">
import { isSupportedBrowser } from 'vite-plugin-supported-browserslist/web';

const isSupported = isSupportedBrowser();
</script>

<template>
  <div class="alert alert-bad" v-if="!isSupported">
    <span class="closebtn">&times;</span>
    This website may not work correctly with an outdated browser. Please update as soon as possible.
  </div>
  <div class="alert alert-good" v-else>
    <span class="closebtn">&times;</span>
    Yay! Your browser is supported!
  </div>
</template>

<style>
.alert {
  padding: 20px;
  color: white;
}

.alert-good {
  background-color: green
}

.alert-bad {
  background-color: #f44336;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
