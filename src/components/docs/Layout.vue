<template>
<div>
    <div class="container">
        <h1 id="layout">Layout</h1>
            <div class="card">
                <p>Hero is mobile first. Classes are written for a mobile display and overridden for larger displays. See our breakpoints for display size information.</p>
                <p>Hero includes some classes for basic layout.</p>
                <h2>Layout classes</h2>
                <h3 id="container">Container</h3>
                <p>The <code>.container</code> class can be applied to size an element based on display size.</p>
                <table class="specs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>extra small displays<br/><small>&lt; 640px</small></th>
                            <th>small displays<br/><small>&gt; 640px</small></th>
                            <th>medium displays<br/><small>&gt; 1023px</small></th>
                            <th>large displays<br/><small>&gt; 1219px</small></th>
                            <th>extra large displays<br/><small>&gt; 1439px</small></th>
                        </tr>
                        <tr>
                            <td>container width</td>
                            <td>100%</td>
                            <td>640px</td>
                            <td>768px</td>
                            <td>960px</td>
                            <td>1150px</td>
                        </tr>
                    </thead>
                </table>
                <p>Children of an element with class <code>.h-row</code> will be aligned in a row.</p>

<pre><code class="html">&lt;div class=&quot;h-row&quot;&gt;
    &lt;div&gt;1&lt;/div&gt;
    &lt;div&gt;2&lt;/div&gt;
    &lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="h-row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

                <p>Children of an element with class <code>.h-column</code> will be aligned in a column.</p>

<pre><code class="html">&lt;div class=&quot;h-column&quot;&gt;
    &lt;div&gt;1&lt;/div&gt;
    &lt;div&gt;2&lt;/div&gt;
    &lt;div&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>

<div class="h-column">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

<p>There are responsive classes to control layout on different size displays. They target only <code>div</code> elements.</p>
<table class="specs short-rows five-even-columns">
    <thead>
        <tr>
            <th></th>
            <th colspan="4">columns</th>
        </tr>
        <tr>
            <th>display size</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
        </tr>
        <tr>
            <td>xs</td>
            <td>-</td>
            <td>.col-xs-2</td>
            <td>.col-xs-3</td>
            <td>.col-xs-4</td>
        </tr>
        <tr>
            <td>sm</td>
            <td>-</td>
            <td>.col-sm-2</td>
            <td>.col-sm-3</td>
            <td>.col-sm-4</td>
        </tr>
        <tr>
            <td>md</td>
            <td>-</td>
            <td>.col-md-2</td>
            <td>.col-md-3</td>
            <td>.col-md-4</td>
        </tr>
        <tr>
            <td>lg</td>
            <td>-</td>
            <td>.col-lg-2</td>
            <td>.col-lg-3</td>
            <td>.col-lg-4</td>
        </tr>
        <tr>
            <td>xl</td>
            <td>-</td>
            <td>.col-xl-2</td>
            <td>.col-xl-3</td>
            <td>.col-xl-4</td>
        </tr>
    </thead>
</table>

<pre><code class="html">&lt;div class=&quot;panel default lg&quot;&gt;
    &lt;div class=&quot;container h-row&quot;&gt;
        &lt;div class=&quot;h-column col-sm-1 col-md-2&quot;&gt;
            &lt;h2 class=&quot;center&quot;&gt;A centered heading&lt;/h2&gt;
            &lt;p&gt;Lorem ... taiyaki.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;h-column col-sm-1 col-sm-2&quot;&gt;
            &lt;h2 class=&quot;center&quot;&gt;Another one&lt;/h2&gt;
            &lt;p&gt;Cornhole ... plaid.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;panel lg&quot;&gt;
    &lt;div class=&quot;container h-row&quot;&gt;
        &lt;div class=&quot;h-column col-xs-1 col-sm-2 col-md-3&quot;&gt;
            &lt;h2&gt;A heading&lt;/h2&gt;
            &lt;p&gt;Lorem ... taiyaki.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;h-column col-xs-1 col-sm-2 col-md-3&quot;&gt;
            &lt;h2 class=&quot;&quot;&gt;Another&lt;/h2&gt;
            &lt;p&gt;Cornhole ... plaid.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;h-column col-xs-1 col-sm-2 col-md-3&quot;&gt;
            &lt;h2 class=&quot;&quot;&gt;A third one&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;1 asdf asdf&lt;/li&gt;
                &lt;li&gt;1 asdf asdf asdf &lt;/li&gt;
                &lt;li&gt;1a asdf asdfasdf &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
    </div>
    <div class="panel default lg">
        <div class="container h-row">
            <div class="h-column col-sm-1 col-md-2">
                <h2 class="center">A centered heading</h2>
                <p>Lorem ipsum dolor amet slow-carb sriracha YOLO, chartreuse fashion axe meggings taiyaki.</p>
            </div>
            <div class="h-column col-sm-1 col-sm-2">
                <h2 class="center">Another one</h2>
                <p>Cornhole actually before they sold out listicle kickstarter tbh, prism pop-up hell of. Flexitarian chartreuse
                    hoodie iPhone vape cronut activated charcoal farm-to-table copper mug plaid.</p>
            </div>
        </div>
    </div>
    <div class="panel lg">
        <div class="container h-row">
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2>A heading</h2>
                <p>Lorem ipsum dolor amet slow-carb sriracha YOLO, chartreuse fashion axe meggings taiyaki.</p>
            </div>
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2 class="">Another</h2>
                <p>Cornhole actually before they sold out listicle kickstarter tbh, prism pop-up hell of. Flexitarian chartreuse
                    hoodie iPhone vape cronut activated charcoal farm-to-table copper mug plaid.</p>
            </div>
            <div class="h-column col-xs-1 col-sm-2 col-md-3">
                <h2 class="">A third one</h2>
                <ul>
                    <li>1 asdf asdf</li>
                    <li>1 asdf asdf asdf </li>
                    <li>1a asdf asdfasdf </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Layout"
};
</script>
