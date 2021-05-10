import { Form, Formik } from 'formik';
import { User } from '../../../interface';
import * as Yup from 'yup';
import {
  FormWrapper,
  InputWrapper,
  Input,
  Submit,
  StyledErrorMessage,
} from './UserForm.styles';

interface Props {
  handleSubmit: (User: User) => void;
}

const validation = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(6, 'Your name is too short'),
  email: Yup.string()
    .required('E-mail is required')
    .email('Invalid email')
});

const UserForm = ({ handleSubmit }: Props) => (
  <FormWrapper>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={validation}
      validateOnMount
      onSubmit={(values: User) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, isValid }) => {
        return (
          <Form>
            <InputWrapper>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                error={touched.name && errors.name}
              />
              {errors.name && touched.name && (
                <StyledErrorMessage>{errors.name}</StyledErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">E-mail</label>
              <Input
                id="email"
                name="email"
                error={touched.email && errors.email}
              />
              {errors.email && touched.email && (
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
              )}
            </InputWrapper>
            <Submit type="submit" disabled={!isValid}>
              SUBMIT
            </Submit>
          </Form>
        );
      }}
    </Formik>
  </FormWrapper>
);

export default UserForm;
