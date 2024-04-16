import { useForm } from "react-hook-form";
import Email from "../../../smtp.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Form = () => {
  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // sending the email using smtp
  const onSubmit = async (data) => {
    try {
      await Email.send({
        SecureToken: import.meta.env.VITE_SMTP_SECRET_TOKEN,
        To: import.meta.env.VITE_SMTP_TO_EMAIL,
        From: import.meta.env.VITE_SMTP_FROM_EMAIL,
        Subject: data.subject,
        Body: `
        <p>Hello Antrak Exports LLC,</p>
<p>You got a new message from ${data.fullName}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  <strong>Name:</strong> ${data.fullName}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  <strong>Email:</strong> ${data.email}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  <strong>Number:</strong> ${data.number}
</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">
  <strong>Message:</strong> ${data.message}
</p>
        `,
      });
      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="form">
        <div className="wrapper container">
          <div className="py-5">
            <div className="row">
              <div className="col-lg-6 col-xs-12 d-flex flex-column mx-auto">
                <p className="text-center">
                  Please feel free to reach out to us using the contact form. We
                  are here and ready to assist you with any inquiries you may
                  have.
                </p>
                <p className="text-center">
                  <span className="text-danger px-1 fw-bold">&#42;</span>
                  Indicates required field
                </p>

                <form
                  id="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="d-flex flex-column w-100 h-100"
                >
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control pt-4 d-flex flex-column border-0">
                          <label htmlFor="fullName" className="fw-bold">
                            Full Name
                            <span className="text-danger px-1">&#42;</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            className="border border-secondary px-3 py-2 rounded"
                            autoComplete="off"
                            placeholder="Enter your full name"
                            {...register("fullName", { required: true })}
                          />
                          {errors.fullName && (
                            <span className="text-danger">
                              Please enter your full name
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </InView>
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control pt-4 d-flex flex-column border-0">
                          <label htmlFor="email" className="fw-bold">
                            Email<span className="text-danger px-1">&#42;</span>
                          </label>
                          <input
                            type="text"
                            id="email"
                            className="border border-secondary px-3 py-2 rounded"
                            autoComplete="off"
                            placeholder="eg: example@mail.com"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email",
                              },
                            })}
                          />
                          {errors.email && (
                            <span className="text-danger">
                              Please enter a valid email
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </InView>
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control pt-4 d-flex flex-column border-0">
                          <label htmlFor="number" className="fw-bold">
                            Number
                            <span className="text-danger px-1">&#42;</span>
                          </label>
                          <input
                            type="tel"
                            id="number"
                            className="border border-secondary px-3 py-2 rounded"
                            autoComplete="off"
                            placeholder="Enter your phone number"
                            {...register("number", {
                              required: true,
                              pattern: {
                                value: /^\d+$/,
                                message: "Invalid phone number",
                              },
                            })}
                          />
                          {errors.number && (
                            <span className="text-danger">
                              Please enter a valid phone number
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </InView>
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control pt-4 d-flex flex-column border-0">
                          <label htmlFor="subject" className="fw-bold">
                            Subject
                            <span className="text-danger px-1">&#42;</span>
                          </label>
                          <input
                            type="text"
                            id="subject"
                            className="border border-secondary px-3 py-2 rounded"
                            autoComplete="off"
                            placeholder="Enter the subject"
                            {...register("subject", { required: true })}
                          />
                          {errors.subject && (
                            <span className="text-danger">
                              Please enter a subject
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </InView>
                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control pt-4 d-flex flex-column border-0">
                          <label htmlFor="message" className="fw-bold">
                            Message
                            <span className="text-danger px-1">&#42;</span>
                          </label>
                          <textarea
                            id="message"
                            className="border border-secondary px-3 py-2 rounded"
                            rows="10"
                            cols="50"
                            autoComplete="off"
                            placeholder="Enter your message"
                            {...register("message", { required: true })}
                          />
                          {errors.message && (
                            <span className="text-danger">
                              Please enter a message
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </InView>

                  <InView triggerOnce>
                    {({ inView, ref }) => (
                      <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        exit={{ y: 100 }}
                        variants={slideInVariants}
                        transition={{
                          duration: 2,
                          type: "fade",
                          stiffness: 50,
                        }}
                      >
                        <div className="form-control py-4 d-flex flex-column border-0">
                          <button type="submit" className="form-button">
                            Send Message
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </InView>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
