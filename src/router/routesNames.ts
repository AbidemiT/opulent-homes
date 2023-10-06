export interface IRoutesNames {
    landing: string;
    login: string;
    register: string;
    forgotPassword: string;
    verifyOtp: string;
}

const routesNames: Readonly<IRoutesNames> = {
    landing: "landing",
    login: "login",
    register: "register",
    forgotPassword: "forgot-password",
    verifyOtp: "verify-otp",
}

declare module '@vue/runtime-core' {
    interface Vue {
        $routesNames: IRoutesNames
    }
}

export default routesNames;