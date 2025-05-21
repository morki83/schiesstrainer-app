<script>
  import { config } from '$lib/stores/config';

  const presetColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFFFFF', '#000000'];

  function updateColor(index, value) {
    config.update(cfg => {
      const newColors = [...cfg.colors];
      newColors[index] = value;
      return { ...cfg, colors: newColors };
    });
  }
</script>

<div>
  <h2 class="text-lg font-medium mb-2">Farbwahl</h2>
  {#each Array(6) as _, i}
    <div class="mb-2">
      <input type="color" bind:value={$config.colors[i]} on:change={(e) => updateColor(i, e.target.value)} />
    </div>
  {/each}

  <div class="mt-4">
    <h3 class="font-semibold">Vordefinierte Farben:</h3>
    <div class="flex space-x-2 mt-2">
      {#each presetColors as color}
        <button class="w-8 h-8 rounded-full border-2" style="background-color: {color}" on:click={() => updateColor(0, color)}></button>
      {/each}
    </div>
  </div>
</div>
