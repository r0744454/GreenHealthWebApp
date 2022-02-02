import { Injectable } from '@angular/core';
import localeData from 'src/assets/locale/locale.json';
import { localeEn } from 'src/assets/locale/en.json';
import { localeNl } from 'src/assets/locale/nl.json';
import { localeFr } from 'src/assets/locale/fr.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translationMap: Map<string, string> = new Map<string, string>();

  currentLanguage: string = "";

  constructor() {
    if(localStorage.getItem("defaultLocale") == null) {
      this.currentLanguage = localeData.defaultLocale;
    } else {
      this.currentLanguage = localStorage.getItem("defaultLocale") ?? "en";
    }

    switch(this.currentLanguage) {
      case "en": this.setLanguageEn(); break;
      case "nl": this.setLanguageNl(); break;
      case "fr": this.setLanguageFr(); break;
      default: this.setLanguageEn();
    }
  }

  setLanguageEn(): void {
    this.translationMap.clear();
    for(var entry of localeEn.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
  }

  setLanguageNl(): void {
    this.translationMap.clear();
    for(var entry of localeNl.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
  }

  setLanguageFr(): void {
    this.translationMap.clear();
    for(var entry of localeFr.dict) {
      this.translationMap.set(entry.key, entry.meaning);
    }
  }

  switchLang(lang: string): void {
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
