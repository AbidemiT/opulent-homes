export interface IRoutesNames {
    landing: string,
    login: string;
    register: string;
}

const routesNames: Readonly<IRoutesNames> = {
    landing: "landing",
    login: "login",
    register: "register"
}

declare module '@vue/runtime-core' {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix

    interface Vue {
        $routesNames: IRoutesNames
    }
}

export default routesNames;