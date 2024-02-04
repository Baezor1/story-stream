<script>
    import { onMount } from 'svelte';

    onMount(() => {
        localStorage.setItem('stream-state', 'false');
    });

    let streamState = localStorage.getItem('stream-state') === 'true';
  
    function toggleStreamState() {
      streamState = !streamState;
      localStorage.setItem('stream-state', streamState);
    }
  </script>

<div class="container">
    <h1>Welcome to Story Stream</h1>
    <p>Version 1.0.0</p>
    <button on:click|preventDefault={toggleStreamState}>
        {streamState ? 'Stop Story' : 'Start Story'}
    </button>

</div>

<style>
    .container {
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
    }

    .container h1 {
        margin: 0;
    }

    .container button {
        max-width: 200px;
    }
</style>
