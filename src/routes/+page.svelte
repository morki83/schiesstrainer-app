<script>
  import { goto } from '$app/navigation';
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
  <h1 class="text-3xl font-semibold mb-8">Schießtrainer-App</h1>
  <div class="space-y-4">
    <button class="px-6 py-3 bg-blue-600 text-white rounded" on:click={() => goto('/einstellungen')}>
      Konfiguration starten
    </button>
    <button class="px-6 py-3 bg-gray-500 text-white rounded" on:click={() => goto('/anzeige')}>
      Letzte Konfiguration starten
    </button>
  </div>
</main>
