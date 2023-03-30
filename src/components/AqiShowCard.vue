<script setup>
import{ ref, computed, watch } from 'vue';

const props = defineProps(['parentArr']);
const listenProps = computed(() => props.parentArr)
const clickItem = ref({});
const isClick = ref(false);

const showClickItem = computed(() => {
  if(isClick.value === false && props.parentArr.length) {
    return props.parentArr[0];
  } else if(isClick.value) {
    return clickItem.value;
  }
  return {};
});

function clickData(item) {
  isClick.value = true;
  clickItem.value = item
}

const color = computed(() => {
  return (item) => {
    if(item.aqi > 51 && item.aqi < 101) {
      return 'background-color:rgb(247, 210, 46);'
    } else if(item.aqi > 100 && item.aqi < 151) {
      return 'background-color:orange;'
    } else if(item.aqi > 150 && item.aqi < 201) {
      return 'background-color:rgb(224, 83, 83);'
    } else if(item.aqi > 200 && item.aqi < 301) {
      return 'background-color:rgb(211, 52, 211);'
    } else if(item.aqi > 300 && item.aqi < 401) {
      return 'background-color:dark-red;'
    }
    return 'background-color:rgb(67, 184, 67);';
  }
})

watch(listenProps, () => {
  isClick.value = false;
})

</script>

<template>
  <div class="card-wrap">
    <!-- 大卡片 -->
    <table>
      <tr>
        <th colspan="2">{{ showClickItem.sitename }}</th>
      </tr>
      <tr>
        <th colspan="2" style="background: #fff; color: #000;" :style="color(showClickItem)">{{ showClickItem.status }}</th>
      </tr>
      <tr>
        <th>AQI</th>
        <td>{{ showClickItem.aqi }}</td>
      </tr>
      <tr>
        <th>CO</th>
        <td>{{ showClickItem.co }}</td>
      </tr>
      <tr>
        <th>NO</th>
        <td>{{ showClickItem.no }}</td>
      </tr>
      <tr>
        <th>NO2</th>
        <td>{{ showClickItem.no2 }}</td>
      </tr>
      <tr>
        <th>NOX</th>
        <td>{{ showClickItem.nox }}</td>
      </tr>
      <tr>
        <th>O3</th>
        <td>{{ showClickItem.o3 }}</td>
      </tr>
      <tr>
        <th>PM2.5</th>
        <td>{{ showClickItem['pm2.5'] }}</td>
      </tr>
      <tr>
        <th>PM10</th>
        <td>{{ showClickItem.pm10 }}</td>
      </tr>
      <tr>
        <th>SO2</th>
        <td>{{ showClickItem.so2 }}</td>
      </tr>
      <tr>
        <th>更新時間</th>
        <td class="update-time">{{ showClickItem.publishtime }}</td>

      </tr>
    </table>
    <!-- 小卡片 -->
    <div class="small-card-wrap">
      <ul class="small-card" :class="{'is-click': item === clickItem }"
      v-for="item in props.parentArr" :key="item.longitude" @click="clickData(item)" >
        <li class="district">{{ item.sitename }}</li>
        <li :style="color(item)">{{ item.aqi }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.card-wrap{
  display: flex;
  align-items: start;
  width: 99%;
  table{
    width: 20%;
    text-align: center;
    border:#aaa;
    overflow: hidden;
    margin-right: 2rem;
    color: #fff;
    th, td{
      width: 50%;
      background: #fff;
      background: linear-gradient(90deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
      
      padding: .5rem;
      font-size: 32px;
      border: 1px solid #aaa;
    }
    td.update-time{
      font-size: 26px;
    }
  }

  div.small-card-wrap{
    width: 78%;

    ul.small-card {
      display: inline-block;
      border: 1px solid #aaa;
      border-radius: .5rem;
      overflow: hidden;
      margin: 0 1.5rem 1.5rem 0;
      cursor: pointer;
    
      li {
        display: inline-block;
        font-size: 32px;
        padding: 1rem;
      }
    
      li.district {
        background: linear-gradient(90deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
        color: #fff;
        
      }

    }

    // 點擊後套用這個樣式
    ul.is-click{
      border: 1px solid transparent;
      box-shadow: 0 0 8px rgb(170, 242, 255);
      li.district{
        background: transparent;
      }
    }

  }

}
</style>