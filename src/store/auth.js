import { ref, watch } from 'vue';
import { auth } from '@/firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { defineStore } from 'pinia';

export const useAuthInfo = defineStore("authInfo", () => {
   
    const user = ref(null);
    const error = ref(null);
    const successMessage = ref(null);
    const visiblePopUp = ref(false);
    const visibleError = ref(false);


    async function register (email, password) {
        await createUserWithEmailAndPassword(auth, email, password).then((currentUser) => {
            console.log(user);
            successMessage.value = currentUser.user.email;

        }).catch((err) => {
            error.value = err.message;
            // console.log(err);
        });

    }

    const loginUser =  async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then((data) => {
            console.log(data);
        }).catch((err) => {
            error.value = err.message;
            console.log(err.message);
        });

    };

    onAuthStateChanged(auth, currentUser => {
        console.log()
        user.value = currentUser;
    });

    const signOutUser = async() => {
        await signOut(auth).then(() => {}).catch((err) => {
            console.log(err.message);
        });
    };

    const rememberPass = async (email) => {
        await sendPasswordResetEmail(auth, email).then(() => {
            successMessage.value = `Інструкція по відновленню відправлена на ${email}`;
            console.log(successMessage.value);
        }).catch((err) => {
            console.log(err);
            error.value = err.message;
        });
    };


    const updateUserName = async (userName) => {
        if (!userName) {
            error.value = 'Ім\'я користувача не може бути порожнім.';
            return;
        }

        try {
            await updateProfile(auth.currentUser, { displayName: userName });
            successMessage.value = 'Ім\'я користувача успішно оновлено.';
            toggleSuccessPop(visiblePopUp);
            console.log('12312312');
        } catch (err) {
            error.value = err.message;

            toggleSuccessPop(visibleError);
            console.error(err);
        }
    };

    const changeEmail = async (newEmail) => {
        const user = auth.currentUser;
        try {
            await updateEmail(user, newEmail);
            toggleSuccessPop(visiblePopUp);
            console.log("Email successfully updated");
        } catch (error) {
            toggleSuccessPop(visibleError);
            console.error("Error updating email:", error.message);
        }
    };

    const changePassword = async (newPassword) => {
        const user = auth.currentUser;
        console.log(newPassword);
        try {
            await updatePassword(user, newPassword);
            console.log("Password successfully updated");
            toggleSuccessPop(visiblePopUp);
        } catch (error) {
            toggleSuccessPop(visibleError);
            console.error("Error updating password:", error.message);
        }
    };

    const toggleSuccessPop = (varible) => {

        varible.value = true;
        console.log(varible.value);
        setTimeout(() => {
            varible.value = false;
            console.log(varible.value);
        }, 2000);
    };



    return {
        user,
        error,
        successMessage,
        register,
        loginUser,
        onAuthStateChanged,
        signOutUser,
        rememberPass,
        updateUserName,
        changeEmail,
        changePassword,
        visiblePopUp,
        visibleError

    }

});
