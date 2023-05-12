import { Button } from "react-bootstrap";
import { Formik } from 'formik';

export default function ContactForm() {

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                contact: "",
                age: "",

            }}
            onSubmit={(values) => {
                console.log("SUBMITTED", values);
            }}

            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email is required!';
                }
                if (!values.name) {
                    errors.name = 'Name is required!';
                }
                return errors;
            }}
        >

            {
                ({ values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting, }) => {
                    return (<form method="post" onSubmit={handleSubmit}>
                        <div className="my-2">
                            <input placeholder="Enter Name"
                                name="name"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <div className="text-danger">
                                {errors.name && touched.name && errors.name}
                            </div>
                        </div>
                        <div className="my-2">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email Address"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur} />
                            <div className="text-danger">
                                {errors.email && touched.email && errors.email}
                            </div>

                        </div>
                        <div className="my-2">
                            <input
                                type="number"
                                name="contact"
                                className="form-control"
                                placeholder="Enter Contact"
                                onChange={handleChange}
                                value={values.contact} />
                        </div>
                        <div className="my-2">
                            <input
                                type="number"
                                name="age"
                                className="form-control"
                                min="18" max="99"
                                placeholder="Enter Age"
                                onChange={handleChange}
                                value={values.age} />
                        </div>
                        <div>
                            <Button type="submit" disabled={isSubmitting} className="w-100">ADD</Button>
                        </div>
                    </form>)

                }
            }
        </Formik>
    );
}