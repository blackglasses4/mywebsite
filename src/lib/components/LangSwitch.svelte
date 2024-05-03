<script lang="ts">
	import { supportedLanguages } from "$lib/i18n/config";
    export let languageCode: string;
</script>

<div>
{#each supportedLanguages.filter(language => language.code == languageCode) as language}
    <a href="/{language.nextLangCode}/" title={language.name} on:click={() => localStorage.setItem('preferredLanguage', language.nextLangCode)}><img class="langSwitch" src="/flag/32/{language.code}.png" alt={language.name} /></a>
{/each}
</div>
