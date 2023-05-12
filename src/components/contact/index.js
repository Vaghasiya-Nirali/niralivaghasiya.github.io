import { Formik, ErrorMessage, Field } from "formik";
import * as YUP from "yup";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Envelope, Telephone } from "react-bootstrap-icons";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import "./contact.css";
import { icons } from "react-icons";

const Contact = () => {
  const Error = (props) => {
    return <div className="invalid-feedback">{props.children}</div>;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        hobbies: "",
        gender: "",
        file: "",
      }}
      onSubmit={(values) => {
        console.log("Submitted", values);
      }}
      validationSchema={YUP.object({
        name: YUP.string()
          .required("May I know your name?")
          .max(15)
          .min(2)
          .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
        email: YUP.string()
          .required("please enter your email")
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please enter valid email"
          ),
        message: YUP.string().required("please enter message"),
        hobbies: YUP.array().required("please enter your hobbies"),
        gender: YUP.string().required("please enter your gender"),
        file: YUP.string().required("please choose file"),
      })}

      // validate={(values) => {
      //   const errors = {};
      //   if (!values.name) {
      //     errors.name = "Name is required";
      //   }
      //   if (!values.email) {
      //     errors.email = "Email is required";
      //   }
      //   if (!values.message) {
      //     errors.message = "Message is required";
      //   }
      //   return errors;
      // }}
    >
      {({
        handleSubmit,
        errors,
        touched,
        // handleChange,
        // handleBlur,
        // values,
        isSubmitting,
      }) => {
        return (
          <section id="contact">
            <div className="shadow my-5 p-5">
              <div className="display-6 mb-3 text-muted">Contact</div>
              <Row className=" mb-4">
                <Col md={5}>
                  <div className="mt-1">
                    <div className="h6 text-muted">
                      <Telephone />
                      <span className="bio">+0718-111-0011</span>
                    </div>
                    <div className="h6 text-muted">
                      <Envelope />
                      <span className="bio">walter@company.com</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Form method="post" onSubmit={handleSubmit}>
                      <Field
                        className={
                          errors.name && touched.name
                            ? "form-control w-100 is-invalid"
                            : "form-control mt-2 w-100"
                        }
                        type="text"
                        placeholder="Name"
                        name="name"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.name}
                      />

                      <ErrorMessage name="name" component={Error} />

                      <Field
                        className={
                          errors.email && touched.email
                            ? "form-control w-100 is-invalid"
                            : "form-control mt-2 w-100"
                        }
                        type="email"
                        placeholder="Email"
                        name="email"

                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.email}
                      />

                      <ErrorMessage name="email" component={Error} />

                      <Field
                        className={
                          errors.message && touched.message
                            ? "form-control  w-100 is-invalid"
                            : "form-control mt-2 w-100"
                        }
                        as="textarea"
                        placeholder="Message"
                        name="message"
                        style={{ height: "100px", width: "100%" }}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.message}
                      />
                      <ErrorMessage name="message" component={Error} />

                      <div id="checkbox-group">Hobby</div>
                      <label className="text-muted ">
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value="Reading"
                          id="reading"
                          className="form-check-input is-valid"
                        />
                        Reading
                      </label>
                      <label className="text-muted">
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value=" Traveling"
                          id="traveling"
                          className="form-check-input is-valid"
                        />
                        Traveling
                      </label>
                      <label className="text-muted">
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value=" Drawing"
                          id="drawing"
                          className="form-check-input is-valid"
                        />
                        Drawing
                      </label>
                      <ErrorMessage name="hobbies" component={Error} />

                      <div id="my-radio-group">Gender</div>
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        class="input-hidden"
                      />
                      <label for="male">
                        <FcBusinessman className="gender " />
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        class="input-hidden"
                      />
                      <label for="female">
                        <FcBusinesswoman className="gender" />
                      </label>
                     
                      <ErrorMessage name="gender" component={Error} />

                      <div className="App">
                        <h5>Add Image:</h5>
                        <Field
                          className={
                            errors.file && touched.file
                              ? "form-control  w-100 is-invalid"
                              : "form-control mt-2 w-100"
                          }
                          type="file"
                          accept="image/png, image/jpeg"
                          name="file"
                        />
                      </div>
                      <ErrorMessage name="file" component={Error} />

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="info w-100 mt-4 text-white mb-4"
                      >
                        SEND
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col md={7} className=" d-print-none ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.9774799129763!2d-73.98032087190995!3d40.765927126473905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb250d%3A0xdb570ddcb766e3a8!2sNew%20York%20City%20Center!5e0!3m2!1sen!2sin!4v1614183731149!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                  ></iframe>
                </Col>
              </Row>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};
export default Contact;
