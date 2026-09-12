import { useState } from "react";

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [dirty, setDirty] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        const updatedValues = {
            ...values,
            [name]: value,
        };

        setValues(updatedValues);

        setDirty(
            JSON.stringify(updatedValues) !==
            JSON.stringify(initialValues)
        );
    }

    function handleBlur(event) {
        const { name } = event.target;

        setTouched((previousTouched) => ({
            ...previousTouched,
            [name]: true,
        }));
    }

    function validate() {
        const newErrors = {};

        if (!values.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!values.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!values.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function resetForm() {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setDirty(false);
        setIsSubmitting(false);
    }

    return {
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        setIsSubmitting,
        handleChange,
        handleBlur,
        validate,
        resetForm,
    };
}

export default useForm;