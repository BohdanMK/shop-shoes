import { computed, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, minLength, helpers, sameAs } from '@vuelidate/validators';


export default function userValidations() {
    const data = ref({
        userEmailNew: '',
        userName: null,
        password: '',
        passwordConfirm: '',
    });

    const rules = computed(() => ({
        userEmailNew: {
            email: helpers.withMessage('Некоректний email', email)
        },
        userName: {
            minLength: helpers.withMessage('Мінімальна довжина 2 символів', minLength(2))
        },
        password: {
            minLength: helpers.withMessage('Мінімальна довжина 8 символів', minLength(8))
        },
        passwordConfirm: {
            sameAsPassword: helpers.withMessage('Паролі не співпадають', sameAs(data.value.password))
        }
    }));

    const v = useVuelidate(rules, data.value);

    return {
        data,
        v

    };
}