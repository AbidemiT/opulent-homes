import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const useAppToast = () => {
    const $toast = useToast();
    return $toast;
}

export default useAppToast;