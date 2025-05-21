<script>
  import { config } from '$lib/stores/config';

  function setDuration(event) {
    config.update(cfg => ({ ...cfg, duration: Number(event.target.value) }));
  }

  function toggleRandom() {
    config.update(cfg => ({ ...cfg, random: !cfg.random }));
  }
</script>

<div class="mt-6">
  <label class="block mb-2 font-medium">Anzeigedauer (Sekunden)</label>
  <input type="number" min="1" max="60" bind:value={$config.duration} on:input={setDuration} class="p-2 border rounded w-full" />

  <label class="flex items-center mt-4">
    <input type="checkbox" bind:checked={$config.random} on:change={toggleRandom} class="mr-2" />
    Zufällige Reihenfolge
  </label>
</div>
