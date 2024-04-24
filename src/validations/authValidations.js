import { computed, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, minLength, helpers } from '@vuelidate/validators';

export default function useAuthValidations() {
    const data = ref({
        emailField: '',
        passField: ''
    });

    const rules = computed(() => ({
        emailField: {
            email: helpers.withMessage('Некоректний email', email)
        },
        passField: {
            minLength: helpers.withMessage('Мінімальна довжина 8 символів', minLength(8))
        }
    }));

    const v = useVuelidate(rules, data.value);

    return {
        data,
        v
    };
}
