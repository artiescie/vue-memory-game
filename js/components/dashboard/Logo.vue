<template>
  <div class="logo">
    <h3>AlphaFlip</h3>
    <h4><a href="http://classroomclipart.com" target="_blank">Credits</a></h4>
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
