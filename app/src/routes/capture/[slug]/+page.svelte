<script>
    import { onMount } from 'svelte';

	export let data;
    var title = "undefined"

    var videoSource = "opening.mov"

    if (data.slug == "youtube") {
        title = "Youtube"
    } else if (data.slug == "tiktok") {
        title = "TikTok"
    }

    $: videoPlayer = document.getElementById("player");


    let streamState = localStorage.getItem('stream-state');
  
    onMount(() => {
        window.addEventListener('storage', (event) => {
            if (event.key === 'stream-state') {
                streamState = event.newValue;
            }
        });

        return () => {
            window.removeEventListener('storage', (event) => {
            if (event.key === 'streamState') {
                streamState = event.newValue;
            }
            });
        };
    });

    function changeSource() {
        if (videoSource == "door_one.mov") {
            videoSource = "opening.mov"
        } else {
            videoSource = "door_one.mov"
        }
    }


</script>

{#if streamState == "false"}

<div class="container">
    <h1>{title} Capture</h1>
    <p>Awaiting start command... {streamState}</p>
    <div aria-busy="true"></div>
</div>

{:else}

<div class="video-container">

    <video autoplay src="/{videoSource}" on:ended={changeSource}></video>

</div>

{/if}
<style>
    .container {
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        justify-content: center;
    }

    .container h1 {
        margin: 0;
    }

    .video-container {
        width: 100vw;
        height: 100vh;
        /* background-color: black; */
    }

</style>
