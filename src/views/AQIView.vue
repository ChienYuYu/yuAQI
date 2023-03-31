<script setup>
import AqiSelectCard from '../components/AqiSelectCard.vue';
import AqiShowCard from '../components/AqiShowCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import LoadingComponent from '../components/LoadingComponent.vue'

const aqiData = ref([]);
const filterAqiArr = ref([]) // 篩選後props到子元件
const mySelect = ref('');
const isLoading = ref(true);

// emit從子元件取得選擇縣市
function getEmit(value) {
  mySelect.value = value
  filterCity()
}

// 根據選擇的縣市篩選資料
function filterCity() {
  filterAqiArr.value = aqiData.value.filter((item) => item.county ===  mySelect.value)
}

async function getAqiData() {
  const res = await axios.get('https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate desc&format=JSON')
  aqiData.value = res.data.records;
  // 先讓filterAqiArr有資料 props到子元件，顯示所有觀測站數據
  filterAqiArr.value = res.data.records;
  isLoading.value = false;
}

onMounted(() => {
  getAqiData()
})

</script>

<template>
  <LoadingComponent v-show="isLoading" />
  <div class="wrapper">
    <!-- 選擇縣市卡片 -->
    <AqiSelectCard class="top-card" @my-select="getEmit" />
    <AqiShowCard :parentArr="filterAqiArr" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem;

  .top-card{
    margin-bottom: 3rem;
  }

}
</style>