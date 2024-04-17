<script lang="ts">
	import { supportedLanguages } from "$lib/i18n/config";

    export let language : string;
</script>

<div class="lang">
{#each supportedLanguages.filter(l => l.code == language) as lang}
    <a href="/{lang.linkLocal}/" title={lang.name} on:click={() => localStorage.setItem('preferredLanguage', lang.linkLocal)}>
        <img src="/flag/32/{lang.code}.png" alt={lang.name} />
    </a>
{/each}
</div>