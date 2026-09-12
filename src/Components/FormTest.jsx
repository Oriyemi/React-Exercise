import React from "react";
import useForm from "../hooks/useForm";

function FormTest() {
  const {
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
  } = useForm({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", values);

      setIsSubmitting(false);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>My Form</h1>

      <div>
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your name"
        />

        {touched.name && errors.name && (
          <p>{errors.name}</p>
        )}
      </div>

      <div>
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
        />

        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
      </div>

      <p>
        Form changed: {dirty ? "Yes" : "No"}
      </p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      <button
        type="button"
        onClick={resetForm}
      >
        Reset
      </button>
    </form>
  );
}

export default FormTest;