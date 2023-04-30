import { ReactNode } from 'react';

interface Props {
   children: ReactNode;
   color?: 'primary' | 'secondary' | 'danger';
   onClick: () => void;
}

function Button({ children, color = 'primary', onClick }: Props) {
   return (
      <button onClick={onClick} className={`btn btn-${color}`}>
         {children}
      </button>
   );
}

export default Button;
