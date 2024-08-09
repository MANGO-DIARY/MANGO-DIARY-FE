import { FormProvider as RHFFormProvider } from 'react-hook-form';

export default function FormProvider({ onSubmit, methods, ...props }) {
  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={onSubmit} {...props}>
        {props.children}
      </form>
    </RHFFormProvider>
  );
}
