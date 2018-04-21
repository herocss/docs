<template>
  <div>
      <div class="container">
          <h1 id="navbar">Navbar</h1>
            <div class="card">
                <p>Hero has styling for a responsive navbar.</p>
                <h3>How to use the Navbar</h3>
                <ul>
                    <li>To use the navbar first create <code>navbar</code> element. The contents will be placed in this element.</li>
                    <li>Inside the <code>navbar</code> element contents can be placed in a element with the
                    <a href="#container"><code>container</code></a> class.</li>
                    <li>Place items in a <code>div</code> with the <code>nav-right</code> or <code>nav-left</code> class.</li>
                    <li><code>.nav-right</code> and <code>.nav-left</code> align items to the right or left of the navbar respectively.</li>
                    <li><code>.light</code> or <code>.dark</code> classes can be placed on the navbar element to apply a light or dark color scheme.</li>
                </ul>
            <pre><code class="html">&lt;navbar class=&quot;light&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;nav-left&quot;&gt;
            &lt;a href class=&quot;brand&quot;&gt;brand&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;dogs&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;cats&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&quot;nav-right&quot;&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;lizards&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;bears&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/navbar&gt;</code></pre>
            <p>And here is an example with <code>.dark</code>.</p>
            <p><code>.hide-xs</code> can be applied to hide items on a small display.</p>
            <pre><code class="html">&lt;navbar class=&quot;dark&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;nav-left&quot;&gt;
            &lt;a href class=&quot;brand&quot;&gt;brand&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;dogs&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;cats&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&quot;nav-right&quot;&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;lizards&lt;/a&gt;
            &lt;a href class=&quot;hide-xs&quot;&gt;bears&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/navbar&gt;</code></pre>

            </div>
      </div>

      <navbar class="light">
        <div class="container">
            <div class="nav-left">
                <a href class="brand">brand</a>
                <a href>dogs</a>
                <a href>cats</a>
            </div>
            <div class="nav-right">
                <a href>lizards</a>
                <a href>bears</a>
            </div>
        </div>
      </navbar>
      <navbar class="dark">
        <div class="container">
            <div class="nav-left">
                <a href class="brand">brand</a>
                <a href class="hide-xs">dogs</a>
                <a href class="hide-xs">cats</a>
            </div>
            <div class="nav-right">
                <a href class="hide-xs">lizards</a>
                <a href class="hide-xs">bears</a>
            </div>
        </div>
      </navbar>
      <div class="container">
          <div class="card">
            <h2>Nav-menu</h2>
            <p><code>nav-menu</code> creates a responsive drop-down menu for the navbar.</p>
            <p>In this example the nav-menu is only visible on small displays because we applied the <code>show-cs</code> class.</p>
            <pre><code class="html">&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;nav-left&quot;&gt;
        &lt;a href class=&quot;brand&quot;&gt;brand&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class=&quot;nav-right&quot;&gt;
        &lt;a href class=&quot;hide-xs&quot;&gt;dogs&lt;/a&gt;
        &lt;a href class=&quot;hide-xs&quot;&gt;cats&lt;/a&gt;
        &lt;a href class=&quot;hide-xs&quot;&gt;lizards&lt;/a&gt;
        &lt;a href class=&quot;hide-xs&quot;&gt;bears&lt;/a&gt;
        &lt;menu-container class=&quot;show-xs&quot;&gt;
            &lt;button class=&quot;h-bars&quot; menu=&quot;nav-menu&quot;&gt;
                &lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;
            &lt;/button&gt;
            &lt;nav-menu id=&quot;nav-menu&quot;&gt;
                &lt;a href class=&quot;nav-menu-item&quot;&gt;dogs&lt;/a&gt;
                &lt;a href class=&quot;nav-menu-item&quot;&gt;cats&lt;/a&gt;
                &lt;a href class=&quot;nav-menu-item&quot;&gt;lizards&lt;/a&gt;
                &lt;a href class=&quot;nav-menu-item&quot;&gt;bears&lt;/a&gt;
            &lt;/nav-menu&gt;
        &lt;/menu-container&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
      </div>
      <navbar class="light">
        <div class="container">
            <div class="nav-left">
                <a href class="brand">brand</a>
            </div>
            <div class="nav-right">
                <a href class="hide-xs">dogs</a>
                <a href class="hide-xs">cats</a>
                <a href class="hide-xs">lizards</a>
                <a href class="hide-xs">bears</a>
                <menu-container class="show-xs" v-on:click="navOpen = !navOpen">
                    <button class="h-bars" menu="nav-menu-1">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <nav-menu id="nav-menu-1" v-bind:class="{ open: navOpen }">
                        <a href class="nav-menu-item">dogs</a>
                        <a href class="nav-menu-item">cats</a>
                        <a href class="nav-menu-item">lizards</a>
                        <a href class="nav-menu-item">bears</a>
                    </nav-menu>
                </menu-container>
            </div>
        </div>
    </navbar>
    <div class="container">
        <div class="card">
            <h2><strong>Note:</strong> For Single Page Applications</h2>
            <p>If you plan on using hero with a single page framework (Angular, React, Vuejs) use the built in click handler and class binding for applying the <code>open</code> class to the <code>nav-menu</code> element.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          navOpen: false
      }
  }
}
</script>
