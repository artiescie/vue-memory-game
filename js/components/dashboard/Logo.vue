
/* eslint-disable no-unused-vars */
<template>
  <div class="logo">
    <h3>AlphaFlip</h3>
    <h4>
      Credits: <a href="https://github.com/leftstick/vue-memory-game#readme" target="_blank">Code</a>&nbsp;
      <a href="http://classroomclipart.com" target="_blank">Art</a>
    </h4>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .logo {
    width: 160px;
    height: 100px;
    line-height: 50px;
    padding: 5px;
    border-radius: 5px;
    background-color: #5979ac;
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 450px) {
    .logo {
      width: 150px;
    }
  }

  @media screen and (max-width: 380px) {
    .logo {
      width: 140px;
    }
  }

  @media screen and (max-width: 360px) {
    .logo {
      width: 110px;
    }

    a {
      font-size: 18px;
    }
  }
</style>
