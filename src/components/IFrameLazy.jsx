import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { SSASkeleton } from './UIElements';

const IFrameLazy = ({ src, title, width="100%", height="100%", bg='var(--bg)', load=true,  ...props }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <Box width={width} height={height} position="relative">
      {!iframeLoaded && <SSASkeleton width={width} height={height} bg={bg} />}
      {(load) && (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          style={{ display: iframeLoaded ? 'block' : 'none', border: 0 }}
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          {...props}
         onLoad={() => setIframeLoaded(true)}
        />
      )}
    </Box>
  );
};

export default IFrameLazy;
