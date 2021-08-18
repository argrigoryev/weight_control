import DefaultToast from 'react-native-root-toast';
import { toastColor } from '../constants/Colors';
import { Keyboard } from 'react-native';

export class Toast {
    private static _instance: Toast | null = null;
    private constructor() {}
    public static instance(): Toast {
        if (!Toast._instance) {
            Toast._instance = new Toast();
        }
        return Toast._instance;
    }

    private toast: DefaultToast|null = null;

    public show(text: string) {
        Keyboard.dismiss();
        if (!this.toast) {
            this.toast = DefaultToast.show(text, {
                duration: DefaultToast.durations.SHORT,
                hideOnPress: true,
                opacity: 0.95,
                containerStyle: {
                    marginBottom: 85,
                    backgroundColor: toastColor
                },
                onHide: () => this.toast = null
            });
        }
    }
}
