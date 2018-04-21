<template>
  <div id="app">
    <navbar class="light">
      <div class="container">
        <div class="nav-left">
                <router-link to="/" class="brand">herocss</router-link>
        </div>
         <div class="nav-right">
                <menu-container v-on:click="navOpen = !navOpen">
                    <button class="h-bars always-display">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <nav-menu v-bind:class="{ open: navOpen }">
                      <router-link to="/start" class="nav-menu-item">Getting started</router-link>
                      <router-link to="/documentation" class="nav-menu-item">Documentation</router-link>
                    </nav-menu>
                </menu-container>
            </div>
      </div>
    </navbar>
    <router-view/>
    <div class="footer">
        <div class="container">
            <h4 class="footer-title">Herocss</h4>
            <ul class="inline">
              <li>
                  <a href="https://github.com/ajb32x/hero">repository</a>
              </li>
              <li>
                  <a href="https://www.npmjs.com/package/herocss">npm</a>
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      navOpen: false
    }
  }
};
</script>
