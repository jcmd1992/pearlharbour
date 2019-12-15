<template>
  <div class="Welcome">
    <h1 class="vue-title">Welcome to Attack on Pearl Harbor!!</h1>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>This web application holds facts and theories. !!</i></b>
          <p>It wil look at why the attack happened, attack waves, consequences and theories.</p>
          <p>Just click on the tabs above to see more.</p>
        </td>
        <td>
        </td>
      </tr>
    </table>
    <p class="img"><img src="../assets/Attack.jpg" alt="description here" /> </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
  .Welcome {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: lightgreen;
  }
  .Welcome .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
