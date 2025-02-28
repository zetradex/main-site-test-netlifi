export const getFullLanguageName = (locale: string | undefined) => {
    switch (locale) {
        case "en":
            return "English";
        case "ru":
            return "Russian";
        case "id":
            return "Bahasa Indonesia";
        case "en-IN":
            return "Hindi";
        case "zh-CN":
            return "Chinese (Simplified)";
        case "zh-Hant-TW":
            return "Chinese (Traditional)";
        case "vi-VN":
            return "Vietnamese";
        case "th-TH":
            return "Thai";
        case "ca-ES":
            return "Spanish";
        case "pt-PT":
            return "Portuguese";
        case "ja-JP":
            return "Japanese";
        default:
            return "Unknown";
    }
};
