<script lang="ts">
    import { browser } from "$app/environment";
    
    export let iconSize = 24;

    let theme: string = browser ? localStorage.theme ?? 'system' : '';

    $: nextTheme = theme == 'system' ? 'light' : theme == 'light' ? 'dark' : 'system';
    $: {
        if (browser) {
            if (theme && theme != 'system') {
                localStorage.theme = theme;
                document.documentElement.dataset.theme = theme;
            } else {
                delete localStorage.theme;
                delete document.documentElement.dataset.theme;
            }
        };
    }
</script>

<a class="theme-switch secondary" href="." on:click|preventDefault={() => theme = nextTheme}>
{#if theme == 'light'}
    <svg width={iconSize} height={iconSize} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" x2="12" y1="1" y2="3"/>
        <line x1="12" x2="12" y1="21" y2="23"/>
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
        <line x1="1" x2="3" y1="12" y2="12"/>
        <line x1="21" x2="23" y1="12" y2="12"/>
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
    </svg>
{:else if theme == 'dark'}
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
{:else if theme == 'system'}
    <svg width={iconSize} height={iconSize} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m8.4645 15.536a5 5 0 0 1-1.4645-3.5355 5 5 0 0 1 5-5 5 5 0 0 1 3.5355 1.4645"/>
        <line x1="12" x2="12" y1="1" y2="3"/>
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
        <line x1="1" x2="3" y1="12" y2="12"/>
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
        <path d="m2.3109 21.662 19.299-19.22" stroke-width="1.9997"/>
        <path d="m23.102 18.191a5.3289 5.3289 0 1 1-5.7967-5.7967 4.1447 4.1447 0 0 0 5.7967 5.7967z" stroke-width="1.9997"/>
    </svg>
{/if}
</a>
