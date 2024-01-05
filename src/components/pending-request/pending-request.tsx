import {useAppSelector} from '../../hooks';
import {ReactElement} from 'react';
import {Spinner} from '../spinner';

type RequestPendingProps = {
  children: ReactElement;
}

export const RequestPending = ({ children }: RequestPendingProps) => {
  const { pendingRequestsCount } = useAppSelector((state) => state.APP);

  return (
    pendingRequestsCount > 0
      ? <Spinner />
      : children
  );
};
