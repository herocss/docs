<template>
<div>
    <div class="container">
        <h1 id="alerts">Alerts</h1>
        <div class="card">
            <p>Provide alerts to users.</p>
<pre><code class="html">&lt;div class=&quot;alert primary&quot;&gt;
    &lt;span&gt;Alerts display important messages to users.&lt;/span&gt;
&lt;/div&gt;</code></pre>
        </div>
    </div>
    <div class="alert primary">
        <span>Alerts display important messages to users.</span>
    </div>
    <div class="container">
        <div class="card">
            <p>Alerts can also be used inside cards.</p>
<pre><code class="html">&lt;div class=&quot;alert default&quot;&gt;
    &lt;span&gt;Alert default&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;alert success&quot;&gt;
    &lt;span&gt;Alert success&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;alert primary&quot;&gt;
    &lt;span&gt;Alert primary&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;alert warn&quot;&gt;
    &lt;span&gt;Alert warn&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;alert danger&quot;&gt;
    &lt;span&gt;Alert danger&lt;/span&gt;
&lt;/div&gt;

&lt;p&gt;Alerts support a button to be dismissed.&lt;/p&gt;

&lt;div class=&quot;alert primary&quot;&gt;
    &lt;span&gt;This alert has a dismiss button.&lt;/span&gt;
    &lt;button class=&quot;btn icon-btn&quot;&gt;&amp;times;&lt;/button&gt;
&lt;/div&gt;</code></pre>
            <div class="alert default">
                <span>Alert default</span>
            </div>
            <div class="alert success">
                <span>Alert success</span>
            </div>
            <div class="alert primary">
                <span>Alert primary</span>
            </div>
            <div class="alert warn">
                <span>Alert warn</span>
            </div>
            <div class="alert danger">
                <span>Alert danger</span>
            </div>
            <p>Alerts support a button to be dismissed.</p>
            <div class="alert primary">
                <span>This alert has a dismiss button.</span>
                <button class="btn icon-btn">&times;</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Alerts"
};
</script>
