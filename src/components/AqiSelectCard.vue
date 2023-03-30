<script setup>
import { ref, watch } from 'vue';
const emit = defineEmits(['my-select'])

const city = ref(['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣']);

const selectCity = ref('');

watch(selectCity, () => {
  emit('my-select', selectCity.value)
})

</script>

<template>
  <div class="top-card">
    <div class="wrap">
      <h2 class="title">空氣品質指標 (AQI)</h2>
      <select v-model="selectCity">
        <option value="" disabled selected>請選擇縣市</option>
        <option  v-for="c in city" :value="c" :key="c"> {{ c }} </option>
      </select>
    </div>
    <table>
      <tr>
        <th class="green">0 ~ 50</th>
        <th class="yellow">51 ~ 100</th>
        <th class="orange">101 ~ 150</th>
        <th class="red">151 ~ 200</th>
        <th class="purple">200 ~ 300</th>
        <th class="dark-red">300 ~ 400</th>
      </tr>
      <tr>
        <td class="green">良好</td>
        <td class="yellow">普通</td>
        <td class="orange">對敏感族群不健康</td>
        <td class="red">對所有族群不健康</td>
        <td class="purple">非常不健康</td>
        <td class="dark-red">危害</td>

      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.top-card {
  width: 80%;
  padding: 2rem;
  background: linear-gradient(160deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
  background: rgb(12, 42, 107);

  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 1rem;
      color: #fff;
      font-size: 32px;
    }

    select {
      padding: .5rem 1rem;
      background: linear-gradient(160deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
      color: #fff;
      border-color: #aaa;

      &:focus {
        outline: none;
      }

      option {
        background: rgb(12, 42, 107);
      }
    }
  }

  table {
    border-collapse: collapse;
    border: 2px solid #ccc;
    text-align: center;

    th,
    td {
      width: 16.6%;
      color: #111;
      font-weight: bold;
      padding: .5rem;
    }

    .green {
      background: rgb(67, 184, 67);

    }

    .yellow {
      background: rgb(247, 210, 46);
    }

    .orange {
      background: orange;
    }

    .red {
      background: rgb(224, 83, 83);
    }

    .purple {
      background: rgb(211, 52, 211);
    }

    .dark-red {
      background: rgb(175, 7, 7);
    }

  }
}</style>