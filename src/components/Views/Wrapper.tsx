// import React, { PropsWithChildren } from 'react'

// const Wrapper = ({children}:PropsWithChildren) => {
//   return (
//     <div className='min-h-screen'>{children}</div>
//   )
// }

// export default Wrapper

import React, { PropsWithChildren } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="wrapper min-h-screen">
      {children}
    </div>
  );
};

export default Wrapper;
