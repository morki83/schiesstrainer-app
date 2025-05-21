<script>
  import { config } from '$lib/stores/config';
  import { onMount } from 'svelte';

  let index = 0;
  let interval;
  let currentColor = $config.colors[0];

  function startCycle() {
    clearInterval(interval);
    interval = setInterval(() => {
      const activeColors = $config.colors.filter(Boolean);
      index = $config.random ? Math.floor(Math.random() * activeColors.length) : (index + 1) % activeColors.length;
      currentColor = activeColors[index];
    }, $config.duration * 1000);
  }

  onMount(() => {
    startCycle();
    return () => clearInterval(interval);
  });
</script>

<div class="w-full h-full flex items-center justify-center" style="background-color: {currentColor}">
  <button class="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded" on:click={() => history.back()}>
    Zurück
  </button>
</div>
