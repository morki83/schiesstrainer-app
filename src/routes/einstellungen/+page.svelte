<script>
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import TimerConfig from '$lib/components/TimerConfig.svelte';
  import { config } from '$lib/stores/config';
  import { goto } from '$app/navigation';

  function startTraining() {
    config.update(cfg => ({ ...cfg, started: true }));
    goto('/anzeige');
  }
</script>

<main class="p-6 max-w-xl mx-auto">
  <h1 class="text-2xl font-semibold mb-4">Einstellungen</h1>
  <ColorPicker />
  <TimerConfig />
  <button class="mt-6 px-4 py-2 bg-green-600 text-white rounded" on:click={startTraining}>
    Training starten
  </button>
</main>
