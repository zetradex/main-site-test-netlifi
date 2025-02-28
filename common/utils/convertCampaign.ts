export const convertCampaign = (campaign: string): string => {
    switch (campaign) {
        case "/":
            return "/Homepage";
        default:
            return campaign;
    }
};
