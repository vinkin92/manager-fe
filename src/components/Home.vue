<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo">
      </div>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">mmm</div>
        <div class="user-info">admin</div>
      </div>
      <div class="wrapper">
        <div class="main-page"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basic-layout{
  position: relative;
  .nav-side{
    position:fixed;
    width:200px;
    height:100vh;
    background-color: #001529;
    color:#fff;
    overflow-y: auto;
    transition: width 0.5s;    
  }
  .content-right{
    margin-left: 200px;
    .nav-top{
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper{
      background-color: #eef0f3;
      padding: 20px;
      height:calc(100vh - 50px);
      .main-page{
        background-color: #fff;
        height:100%;
      }
    }
  }
}
</style>
