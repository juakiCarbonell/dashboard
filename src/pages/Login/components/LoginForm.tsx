import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { FormUser } from '../../../interface';
import * as Yup from 'yup';

interface Props {
  handleSubmit: (formUser: FormUser) => void;
}

const validation = Yup.object().shape({
  user: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = ({ handleSubmit }: Props) => (
  <Formik
    initialValues={{
      user: '',
      password: '',
    }}
    validationSchema={validation}
    onSubmit={(values: FormUser) => {
      handleSubmit(values);
    }}
  >
    <Form>
      <label htmlFor="user">Nombre</label>
      <Field id="user" name="user" placeholder="John" />
      <ErrorMessage name="user" />
      <label htmlFor="password">Contraseña</label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
      <button type="submit">Enviar</button>
    </Form>
  </Formik>
);

export default LoginForm;
