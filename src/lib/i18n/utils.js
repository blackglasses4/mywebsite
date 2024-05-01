import { browser } from "$app/environment";
import { defaultLanguage, supportedLanguages } from "./config";

function getPreferredLanguage() {
    const preferredLanguage = localStorage.preferredLanguage || navigator.language.split('-')[0];
    return supportedLanguages.map(supportedLanguage => supportedLanguage.code).includes(preferredLanguage) ? preferredLanguage : defaultLanguage;
}

function navigateToPreferredLanguageVersion(suffix='') {
    if (browser) {
        const preferredLanguage = getPreferredLanguage();
        location.href = '/' + preferredLanguage + '/' + suffix;
    }
}

export { navigateToPreferredLanguageVersion }