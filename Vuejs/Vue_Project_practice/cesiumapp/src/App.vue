<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-20 19:29:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-20 20:42:23
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium';
import { onMounted } from '@vue/runtime-core';
onMounted(() => {
  // const viewer = new Cesium.Viewer('cesiumContainer');
  var custom = new Cesium.ArcGisMapServerImageryProvider({
    url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
  })

  var viewer = new Cesium.Viewer('cesiumContainer', {
    // 不创建baseLayerPicker小部件
    baseLayerPicker: false,
    // 设置图像提供的程序
    imageryProvider: custom,
    // 设置cesium世界地形
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true,
      requestVertexNormals: true,
    })
  })

  viewer.camera.setView({
    destination: new Cesium.Cartesian3(1332761, -4662399, 4137888),
    orientation: {
      heading: 0.60,
      pitch: -0.66
    }
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
