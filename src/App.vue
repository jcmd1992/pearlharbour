<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">PearlHarbour Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/Welcome"><i class="fa fa-home" style="padding: 5px"> Welcome</i></b-nav-item>
          <b-nav-item to="/why"><i class="fa fa-list" style="padding: 5px"> Why</i></b-nav-item>
          <b-nav-item to="/AttackWave1"><i class="fa fa-list" style="padding: 5px">Wave 1</i></b-nav-item>
          <b-nav-item to="/AttackWave2"><i class="fa fa-list" style="padding: 5px">Wave 2</i></b-nav-item>
          <b-nav-item to="/Consequences"><i class="fa fa-list" style="padding: 5px">Consequnces</i></b-nav-item>
          <b-nav-item to="/Theories"><i class="fa fa-list" style="padding: 5px">Theories</i></b-nav-item>
          <b-nav-item to="/Message"><i class="fa fa-list" style="padding: 5px">Message</i></b-nav-item>
          <b-nav-item to="/Messages"><i class="fa fa-list" style="padding: 5px">Messages</i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
