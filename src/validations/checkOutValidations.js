import { computed, ref, watch, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, helpers, required, email } from '@vuelidate/validators';



export default function useCheckOutValidations() {
    const phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const data = ref({
        nameField: null,
        soNameField: '',
        telephoneField: '',
        emailField: null,
        selectedDelivery: '',
        addressOfDelivery: '',
        commentField: ''
    });

    const rules = computed(() => ({
        nameField: {
            minLength: helpers.withMessage('Мінімальна довжина 2 символів', minLength(2)),
            required: helpers.withMessage('Вкажіть ім\'я', required),
        },
        soNameField: {
            minLength: helpers.withMessage('Мінімальна довжина 2 символів', minLength(2)),
            required: helpers.withMessage('Вкажіть прізвище', required),
        },
        addressOfDelivery: {
            minLength: helpers.withMessage('Мінімальна довжина 5 символів', minLength(5)),
            required: helpers.withMessage('Вкажіть адресу доставки', required),
        },
        selectedDelivery: {
            required: helpers.withMessage('Виберіть метод доставки', required)
        },
        telephoneField: {
            required: helpers.withMessage('Вкажіть номер телефону', required),
            regex: helpers.withMessage('Вкажіть коректний номер телефону', helpers.regex(/^\+(?:[0-9] ?){6,14}[0-9]$/))

        },
        emailField: {
            email: helpers.withMessage('Некоректний email', email)
        },

    }));

    const v = useVuelidate(rules, data.value);

    const validateDataFields = () => {
        v.value.$touch();
        return v.value.$error;
    }

    return {
        data,
        v,
        validateDataFields
    };
}
