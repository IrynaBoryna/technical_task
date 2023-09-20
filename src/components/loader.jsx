import { Audio } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#3470ff"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
}

