import { useState } from "react";
import style from "../styles/ContactForm.module.css";

const ContactForm = () => {
    const [data, setData] = useState({ name: "", phone: "", email: "", inquiry: "" });
    const [errors, setErrors] = useState({ general: "", phone: "" });
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === "phone") {
            if (value.trim() === "") {
                setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
            } else if (!validatePhoneNumber(value)) {
                setErrors((prevErrors) => ({ ...prevErrors, phone: "Invalid phone number format" }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePhoneNumber(data.phone)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: "Invalid phone number format" }));
            return;
        }

        setSubmitting(true);
        const formData = new FormData();
        formData.append("name", data.name.trim());
        formData.append("phone", data.phone.trim());
        formData.append("email", data.email.trim());
        formData.append("inquiry", data.inquiry.trim());

        try {
            const response = await fetch("https://web.ics.purdue.edu/~gmejiasg/CGT390/send-project-data.php", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                setData({ name: "", phone: "", email: "", inquiry: "" });
                setErrors({ general: "", phone: "" });
                setSuccessMessage("Data submitted successfully.");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 1000);
            } else {
                setErrors({ general: result.message, phone: "" });
                setSuccessMessage("");
            }
        } catch (error) {
            setErrors({ general: error.message, phone: "" });
        } finally {
            setSubmitting(false);
        }
    };

    const isFormValid = () => {
        return (
            data.name.trim() !== "" &&
            data.phone.trim() !== "" &&
            data.email.trim() !== "" &&
            data.inquiry.trim() !== "" &&
            validatePhoneNumber(data.phone)
        );
    };

    return (
        <form onSubmit={handleSubmit} className={style["contact-form"]}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={data.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number (e.g., 123-456-7890)"
                required
                value={data.phone}
                onChange={handleChange}
            />
        
            {errors.phone && <p className={style['error']}>{errors.phone}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={data.email}
                onChange={handleChange}
            />
            <textarea
                name="inquiry"
                placeholder="What is your inquiry?"
                maxLength={200}
                required
                value={data.inquiry}
                onChange={handleChange}
            ></textarea>
            <p>{data.inquiry.length}/200</p>
            <button type="submit" disabled={submitting || !isFormValid()}>
                Submit
            </button>
            {errors.general && <p className={style['error']}>{errors.general}</p>}
            {successMessage && <p className={style['success']}>{successMessage}</p>}
        </form>
    );
};

export default ContactForm;
