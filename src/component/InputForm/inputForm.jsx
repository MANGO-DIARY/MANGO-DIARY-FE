import { useFormContext } from 'react-hook-form';
// import Skeleton from '../skeleton/index.js';
import { Images } from '../../styles/images';
import { InputWrap } from './styles';
// ----------------------------------------------------------------------

export default function InputForm({ placeholder, IconSrc, name, readonly = false, required = false, loading = false, unit, ...other }) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const isError = !!errors[name];

  const errorMessage = errors[name]?.message || '';

  const inputValue = watch(name);

  const handleClear = () => {
    setValue(name, '');
  };

  // if (loading) {
  //   return (
  //     <div className="RHFInput">
  //       <Skeleton />
  //     </div>
  //   );
  // }

  if (readonly) {
    return (
      <div className="RHFInput">
        <div>{watch()[name]}</div>
      </div>
    );
  }

  return (
    <InputWrap>
      <img src={IconSrc} className="SearchIcon" alt="SearchIcon" />
      <input placeholder={placeholder} style={isError ? { border: `1px solid rgb(255, 43, 43)` } : {}} {...register(name, { required })} {...other} />
      {inputValue && (
        <div onClick={handleClear} className="CloseIcon">
          <img src={Images.close} alt="CloseIcon" />
        </div>
      )}

      {isError && <p className="RHFHelperText">{errorMessage}</p>}
    </InputWrap>
  );
}
