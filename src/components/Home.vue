<template>
<section>
    <div class="panel hero brand">
        <div class="container">
            <h1>herocss</h1>
            <p>Herocss is a lightweight, responsive css framework.</p>
        </div>
    </div>
    <div class="panel lg">
        <div class="container h-row c3">
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2 class="center">Lightweight</h2>
                <p>Hero is about 3kB gzipped.</p>
            </div>
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2 class="center">Why Hero</h2>
                <p>Hero is a lightweight css framework with no external dependencies.</p>
                <p>Hero optionally includes a working drop-down menu without external dependencies.</p>
            </div>
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2 class="center">Using Hero</h2>
                <ul>
                    <li><router-link to="/start">Getting started</router-link></li>
                    <li><router-link to="/documentation">Documentation</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
