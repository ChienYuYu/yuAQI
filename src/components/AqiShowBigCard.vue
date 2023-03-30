<template>
  <table>
    <tr>
      <th colspan="2">新莊</th>
    </tr>
    <tr>
      <th colspan="2" class="color">良好</th>
    </tr>
    <tr>
      <th>AQI</th>
      <td>99</td>
    </tr>
    <tr>
      <th>PM2.5</th>
      <td>5</td>
    </tr>
    <tr>
      <th>PM10</th>
      <td>12</td>
    </tr>
    <tr>
      <th>O3</th>
      <td>37.5</td>
    </tr>
    <tr>
      <th>NO2</th>
      <td>11.4</td>
    </tr>
    <tr>
      <th>更新時間</th>
      <td>16:00:00</td>
    </tr>
  </table>
</template>

<script setup>

</script>

<style lang="scss" scoped>
table{
  text-align: center;
  border:#aaa;
  color: #fff;
  overflow: hidden;
  th, td{
    width: 50%;
    background: #fff;
    background: linear-gradient(90deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
    
    padding: .5rem;
    font-size: 32px;
    border: 1px solid #aaa;
  }
  .color{
    background: rgb(67, 184, 67);
  }
}
</style>