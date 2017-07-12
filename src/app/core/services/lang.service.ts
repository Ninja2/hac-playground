import { LOCALE_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LangService {
    private readonly defaultLang: string = 'es';
    appLangs = ['en', 'es'];

    constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(this.defaultLang);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.setLang(this.getCurrentLang() || this.defaultLang, true);
    }

    getCurrentLang(): string {
        return sessionStorage.getItem('hac-playground-language') as string;
    }

    setLang(lang, skipRefresh: boolean = false): void {
        sessionStorage.setItem('hac-playground-language', lang);
        this.translate.use(lang);
        if (lang !== this.getCurrentLang() || !skipRefresh) {
            window.location.reload(); // Patch: reload window to apply language
        }
    }

    getLangs(): string[] {
        return this.appLangs;
    }


}