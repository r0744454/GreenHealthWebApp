import { Injectable } from '@angular/core';
import { locales } from 'src/assets/locale/locale.json';
import { localeEn } from 'src/assets/locale/en.json';
import { localeNl } from 'src/assets/locale/nl.json';
import { localeFr } from 'src/assets/locale/fr.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translationMap: Map<string, string> = new Map<string, string>();

  currentLocale: string = "";
  supportedLocales: string[] = new Array<string>();

  constructor() {
    if(localStorage.getItem("defaultLocale") == null) {
      this.currentLocale = locales.defaultLocale;
    } else {
      this.currentLocale = localStorage.getItem("defaultLocale") ?? "en";
    }

    switch(this.currentLocale) {
      case "en": this.setLanguageEn(); break;
      case "nl": this.setLanguageNl(); break;
      case "fr": this.setLanguageFr(); break;
      default: this.setLanguageEn();
    }

    for(var locale of locales.locales) {
      this.supportedLocales.push(locale.locale);
    }
  }

  getCurrentLang(): string {
    return this.currentLocale;
  }

  getLocales(): string[] {
    return this.supportedLocales;
  }

  setLanguageEn(): void {
    this.translationMap.clear();
    for(var entry of localeEn.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
    localStorage.setItem("defaultLocale", localeEn.locale);
  }

  setLanguageNl(): void {
    this.translationMap.clear();
    for(var entry of localeNl.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
    localStorage.setItem("defaultLocale", localeNl.locale);
  }

  setLanguageFr(): void {
    this.translationMap.clear();
    for(var entry of localeFr.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
    localStorage.setItem("defaultLocale", localeFr.locale);
  }

  switchLocale(lang: string): void {
    switch(lang) {
      case "en": this.setLanguageEn(); break;
      case "nl": this.setLanguageNl(); break;
      case "fr": this.setLanguageFr(); break;
      default: this.setLanguageEn();
    }
  }

  gt(key: string, args?: string[]): string {
    if(args == null || args.length == 0) {
      return this.translationMap.get(key) ?? "";
    }
    var toMod = this.translationMap.get(key) ?? "";
    var locSlice = toMod.split('§');
    if(locSlice.length == 1) {
      return toMod;
    }

    var newLocalisedString = locSlice[0];
    for(var i = 1; i<locSlice.length; i++) {
      newLocalisedString += args[i-1] + locSlice[i];
    }
    return newLocalisedString;
  }
}
