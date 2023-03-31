<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const showTime = ref('')

function getDate() {
  const date = new Date()
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  showTime.value = `${year}/${month}/${day}`
} getDate();
</script>

<template>
  <div class="wrapper">
    <header>
      <h1>Yu</h1>
      <p class="date">{{ showTime }}</p>
    </header>
    <div class="show-area">
      <div class="side-menu">
        <ul>
          <li>
            <RouterLink to="/AQI">AQI</RouterLink>
          </li>
          <li>
            <RouterLink to="/AQI_history">歷史紀錄</RouterLink>
          </li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><RouterLink to="/test">測試頁</RouterLink></li>
        </ul>
      </div>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  background: linear-gradient(to top, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
}

header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
  background: rgb(12, 42, 107);
  box-shadow: 0 2px 3px #01010177;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 99;

  h1,
  p {
    color: #fff;
    font-size: 24px;
  }


}

.show-area {
  display: flex;
  position: fixed;
  margin-top: 50px;
  height: calc(100vh - 50px);
  overflow: auto;

  .side-menu {
    position: fixed;
    width: 200px;
    height: 100vh;
    background: rgb(12, 42, 107);
    box-shadow: 2px 0 3px #01010177;
    z-index: 98;

    ul {
      padding: 1.5rem 0;

      a {
        // border: 1px solid #ddd;
        display: block;
        padding: 1.5rem 0;
        text-align: center;
        color: #fff;

        &:hover {
          background: linear-gradient(160deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);
        }
      }

      .router-link-exact-active {
        background: linear-gradient(160deg, #164c9f, #1346a1, #173fa3, #1e37a3, #282ea3);

      }
    }
  }

  main {
    margin-left: 200px;
    // border: 1px solid #fff;
  }
}</style>
