import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IContextData {
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}

const LoadingContext = createContext<IContextData>({} as IContextData);

export const LoadingProvider: React.FC<PropsWithChildren> = (props) => {
  const [isLoading, setIsLoadingOriginal] = useState<boolean>(false);

  const setIsLoading = (v: boolean) => setIsLoadingOriginal(v);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
    </LoadingContext.Provider>
  )
};

export const useIsLoading = () => {
  const isLoading = localStorage.getItem('isLoading');
  const setIsLoading = (v: boolean) => localStorage.setItem('isLoading', String(v));

  return { isLoading, setIsLoading };
};