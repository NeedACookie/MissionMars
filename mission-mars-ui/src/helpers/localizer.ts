export enum LanguageCode {en, ru, ua};
export enum StringCode{
    basicInfo
}

export class Localizer{
    public getString(langCode: LanguageCode, stringCode: StringCode): string{
        return this.localizationStrings[langCode][stringCode];
    }

    private localizationStrings: LocalizationStrings = {
        [LanguageCode.en]: {
            [StringCode.basicInfo]: "Basic Info",
        },
        [LanguageCode.ru]: {
            [StringCode.basicInfo]: "Основная информация",
        }
    }
}

class LocalizationStrings{
    [langCode: number]: {[stringCode: number]: string}
}