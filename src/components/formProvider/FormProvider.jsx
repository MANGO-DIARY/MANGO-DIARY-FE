import { FormProvider as Form } from 'react-hook-form';

export default function FormProvider({ onSubmit, methods, ...props }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...props}>
        {props.children}
      </form>
    </Form>
  );
}
