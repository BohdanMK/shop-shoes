import { auth } from '@/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { defineStore } from 'pinia';

export const useRegisterInfo = defineStore("registerInfo", () => {
    async function register (email, password) {
        await createUserWithEmailAndPassword(auth, email, password).then(() => {}).catch((err) => {
            console.log(err);
        });

    }

    return {
        register
    }

});
