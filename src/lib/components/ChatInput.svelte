<script>

    

    let prompt = '';
    let response = '';

    async function handleSubmit() {
        const res = await fetch('/api/open-ai?prompt='+encodeURIComponent(prompt), {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "accept": "application/json"
            }
        });

        const jsonResponse = await res.json();

        response = jsonResponse.body;
    }
</script>

<input bind:value={prompt} placeholder="Ask me a question"/>
<button on:click={handleSubmit}>Ask ChatGPT</button>

<p>{response}</p>
