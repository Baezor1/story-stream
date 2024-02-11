<script>
    const socket = new WebSocket("ws://localhost:7500");

    var messages = ["Awaiting Connection..."]

    socket.addEventListener("open", () => {
        messages.push("Connected to Server!")
        messages = messages
        console.log("Connected!")
    })

</script>

<h1>Logs</h1>
{#each messages as log}
    <p>{log}</p>
{/each}