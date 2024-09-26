import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { SSASkeleton } from './UIElements';

const ImgLazy = ({ src, alt, width ="100%", height="100%", bg = 'var(--bg)', onLoad = null, ...props}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box width={width} height={height} position="relative">
      {!imageLoaded && <SSASkeleton width={width} height={height} bg={bg} />}
      {(
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          onLoad={() => {setImageLoaded(true); if(onLoad) onLoad()}}
          {...props}
        />
      )}
    </Box>
  );
};

export default ImgLazy;
