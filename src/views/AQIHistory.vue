<script setup>
import axios from 'axios';
import { ref, computed, onMounted, reactive } from 'vue';
import LoadingComponent from '../components/LoadingComponent.vue'
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

const isLoading = ref(true);
const city = ref(['基隆市', '臺北市', '新北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '宜蘭縣', '澎湖縣', '金門縣', '連江縣']);

const defaultCityname = ref(''); // 用於 v-model / 首次進入顯示基隆市
const defaultSitename = ref(''); // 用於 v-model / 使用空字串讓select顯示預設選項 / 首次進入顯示基隆
const historyAqiArr = ref([]);
const showChartArr = ref([]);

// 圖表相關=======================================
const chartType = ref('bar');
const loaded = ref(false);
const data = reactive({
  labels: [],
  datasets: [
    {
      label: 'AQI',
      // backgroundColor: '#f87979',
      backgroundColor: '#fc3',
      // backgroundColor: '#f33',
      borderColor: '#aaa',
      data: []
    }
  ]
});

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  
  scales: {
        x: {
            ticks: {
                color: '#fff'
            }
        },
        y: {
            ticks: {
                color: '#fff'
            }
        }
    }
})
// ========================================

const sitenameArr = ref([]); // 選擇城市後才會將資料寫入sitenameArr
const selectSitename = computed(() => {
  if(sitenameArr.value.length) {
    return sitenameArr.value
  }
  return [];
});

// 根據選擇的縣市挑出觀測站寫入sitenameArr
async function filterSitenameOut(e) {
  const city = e.target.value
  try {
    const res = await axios.get('https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate desc&format=JSON')
    const tempArr = res.data.records
    sitenameArr.value = tempArr.filter((item) => item.county === city)
    defaultSitename.value = '';
  } catch (error) {
    alert(error)
  }
}

// 取得歷史AQI(1000筆)
async function getAllAQI() {
  const res = await axios.get('https://data.epa.gov.tw/api/v2/aqx_p_434?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=monitordate desc&format=JSON');
  historyAqiArr.value = res.data.records;
}

// 根據觀測站名稱篩選該站最近10日資料出來
async function get10(e) {
  loaded.value = false; //
  data.labels = [] // 先清空才不會一直累積
  data.datasets[0].data = [] // 先清空才不會一直累積
  showChartArr.value = []; // 先清空才不會一直累積
  const sitename = e.target.value;
  let count = 0;
  historyAqiArr.value.forEach((item) => {
    if (count >= 10) { return }
    if(item.sitename === sitename) {
      showChartArr.value.push(item)
      count++
    }
  })
  await chartData()  
  loaded.value = true;
}

// 整理要顯示的圖表資料
async function chartData() {
  showChartArr.value.forEach((item) => {
    data.labels.unshift(item.monitordate)
    data.datasets[0].data.unshift(item.aqi)
  })
}

//  用於首次到此頁有東西顯示 / 自動進行請求先拿到一筆資料
async function getFirst() {
  defaultCityname.value = '基隆市'
  try {
    const res = await axios.get('https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate desc&format=JSON')
    const tempArr = res.data.records
    sitenameArr.value = tempArr.filter((item) => item.county === defaultCityname.value)
    defaultSitename.value = '基隆';
  } catch (error) {
    alert(error)
  }

  let count = 0;
  historyAqiArr.value.forEach((item) => {
    if (count >= 10) { return }
    if(item.sitename === '基隆') {
      showChartArr.value.push(item)
      count++
    }
  })
  await chartData()  
  loaded.value = true;
}

// 切換圖表顯示
function switchBar(type) {
  chartType.value = type;
}

onMounted(async() => {
  isLoading.value = true;
  await getAllAQI();
  getFirst();
  isLoading.value = false;
})

</script>


<template>
  <LoadingComponent v-show="isLoading" />
  <div class="select-wrap">
    <div class="wrap">
      <h2 class="title">十日統計資料</h2>
      <select @change="filterSitenameOut" v-model="defaultCityname">
        <option value="" disabled selected>請選擇縣市</option>
        <option v-for="c in city" :value="c" :key="c"> {{ c }} </option>
      </select>
      <select @change="get10" v-model="defaultSitename">
        <option value="" disabled selected>請選擇觀測站</option>
        <option v-for="site in selectSitename" :value="site.sitename" :key="site"> {{ site.sitename }} </option>
      </select>
    </div>
  </div>
  <div class="chart-area">
    <Bar  v-if="loaded && chartType === 'bar'"  :data="data" :options="options"/>
    <button  v-if="loaded && chartType === 'bar'" @click="switchBar('line')">切換</button>
    <Line v-if="loaded && chartType === 'line'" :data="data" :options="options" />
    <button  v-if="loaded && chartType === 'line'" @click="switchBar('bar')">切換</button>
  </div>
</template>


<style lang="scss" scoped>
div.select-wrap{
  width: 40%;
  padding: 2rem;
  background: rgb(12, 42, 107);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 2rem;

  .wrap{
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 1rem;
      color: #fff;
      font-size: 32px;
    }

    select {
      padding: .5rem 1rem;
      margin-right: 2rem;
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
}

div.chart-area{
  width: 80%;
  height: 600px;
  margin: 2rem 0 0 2rem;
  padding: 2rem;
  background: rgb(12, 42, 107);
  border-radius: 1rem;
}
</style>