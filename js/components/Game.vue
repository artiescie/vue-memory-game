<template>
  <div class="game-panel">
    <!-- 组装上、中、下三个部分组件 -->
    <!--assemble top, main, bottom parts-->
    <Dashboard></Dashboard>
    <Chessboard></Chessboard>
    <Status></Status>
  </div>
</template>

<script>

  import Dashboard from './dashboard/Dashboard';
  import Chessboard from './card/Chessboard';
  import Status from './footer/PlayStatus';

  import { mapActions } from 'vuex';
  import { STATUS } from '../vuex/store/statusEnum';

  export default {

    //通过mapActions将actions映射到methods里
    //Mapping actions to methods by mapActions

    methods: {
      ...mapActions([
        'updateStatus',
        'reset'
      ])
    },

    created() {
      console.log('Game created');
      this.updateStatus(STATUS.READY);
      this.reset();
    },

    components: {Dashboard, Chessboard, Status}
  }
</script>

<style scoped>
  .game-panel {
    width: 570px;
    height: 700px;
    border: 4px solid #BDBDBD;
    border-radius: 2px;
    background-color: #faf8ef;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    .game-panel {
      width: 100%;
      height: 100%;
      justify-content: space-around;
    }
  }
</style>
