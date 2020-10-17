<template>
  <header>
    <div class="header-body">
      <div class="header-title">
        <a href="">
          <img class="header-logo" src="../assets/headerlogo.png" alt="">
        </a>
      </div>
      <nav class="header-menu">
        <ul class="header-menu-list">
          <li>TOP</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <div class="font-change">
          <div class="font-change-left">
            <h2>文字サイズ変更</h2>
          </div>
          <div class="font-change-right">
            <div class="font-size">

            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
  li{
    list-style-type: none;
  }

  header{
    width: 100vw;
    /* height: 100px; */
  }

  .header-title{
    width: 50vw;
  }

  .header-menu{
    width: 50vw;
  }
  
  .header-logo{
    width: 250px;
    height: 98px;
  }

  .header-body{
    display: flex;
    flex-direction: row;
  }

  .header-menu-list{
    display: flex;
    justify-content: space-between;
  }
  

</style>