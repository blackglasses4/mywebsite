import { browser } from "$app/environment";
import { defaultLanguage, supportedLanguages } from "./config";

function getPreferredLanguage() {
    const preferredLang = localStorage.preferredLang || navigator.language.split('-')[0];
    return supportedLanguages.map(supportedLanguage => supportedLanguage.code).includes(preferredLang.linkLocal) ? preferredLang.linkLocal : defaultLanguage;
}

function navigateToPreferredLanguageVersion(suffix = '') {
    if (browser) {
        const preferredLang = getPreferredLanguage();
        location.href = '/' + preferredLang + '/' + suffix;
    }
}

export { navigateToPreferredLanguageVersion }