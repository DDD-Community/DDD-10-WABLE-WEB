import { useEffect, useState } from 'react';
import { FieldErrors } from 'react-hook-form';

export function useFormRootError(errors: FieldErrors) {
  const [isFormRootError, setIsFormRootError] = useState(false);
  useEffect(() => {
    const isError = !!errors?.root && Object.keys(errors.root).length > 0;
    setIsFormRootError(isError);
  }, [errors.root]);

  return isFormRootError;
}
