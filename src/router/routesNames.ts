export interface IRoutesNames {
    auth: string;
    login: string;
    register: string;
    forgotPassword: string;
    verifyOtp: string;
    resetPassword: string;
    dashboardIndex: string;
    userProfile: string;
    Assets: string;
    Mortgage: string;
    Savings: string;
    Marketplace: string;
    assetDetails: string;
    wallet: string;
    referral: string;
}

const routesNames: Readonly<IRoutesNames> = {
    auth: "auth",
    login: "login",
    register: "register",
    forgotPassword: "forgot-password",
    verifyOtp: "verify-otp",
    resetPassword: "reset-password",
    dashboardIndex: "dashboard",
    userProfile: "profile",
    Assets: "assets",
    Mortgage: "mortgage",
    Savings: "savings",
    Marketplace: "marketplace",
    assetDetails: "asset-details",
    wallet: "wallet",
    referral: "referral",
}

declare module '@vue/runtime-core' {
    interface Vue {
        $routesNames: IRoutesNames
    }
}

export default routesNames;