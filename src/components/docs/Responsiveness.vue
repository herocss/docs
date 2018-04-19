<template>
<div>
    <div class="container">
        <h1 id="responsiveness">Responsiveness</h1>
            <div class="card">
                <h2>Visibility</h2>
                <p>Hero has a few classes to alter element visibility based on display size.</p>
                <p>This table defines how the responsive classes will set the <code>display</code> property.</p>
                <table class="specs short-rows six-even-columns">
                <thead>
                    <tr>
                        <th></th>
                        <th colspan="5">display size</th>
                    </tr>
                    <tr>
                        <th>class</th>
                        <th>xs</th>
                        <th>sm</th>
                        <th>md</th>
                        <th>lg</th>
                        <th>xl</th>
                    </tr>
                    <tr>
                        <td>hide-xs</td>
                        <td class="not-displayed">none</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>hide-sm</td>
                        <td>-</td>
                        <td class="not-displayed">none</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>hide-md</td>
                        <td>-</td>
                        <td>-</td>
                        <td class="not-displayed">none</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>hide-lg</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td class="not-displayed">none</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>hide-xl</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td class="not-displayed">none</td>
                    </tr>
                    <tr>
                        <td>show-xs</td>
                        <td>-</td>
                        <td class="not-displayed">none</td>
                        <td class="not-displayed">none</td>
                        <td class="not-displayed">none</td>
                        <td class="not-displayed">none</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Responsiveness"
};
</script>
