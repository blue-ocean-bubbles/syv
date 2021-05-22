import React, { useEffect } from 'react';

export default function Registration() {
  useEffect(() => {
    let lm = `<iframe src="https://register.vote.org/?partner=111111&campaign=free-tools" width="100%" marginheight="0" frameborder="0" id="frame1" scrollable ="no"></iframe><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.min.js"></script><script type="text/javascript">iFrameResize({ log:true, checkOrigin:false});</script>`

  })

  return (
    <div>
      <iframe src="https://register.vote.org/?partner=111111&campaign=free-tools" width="100%" marginheight="0" frameborder="0" id="frame1" scrollable="no"></iframe><script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.3/iframeResizer.min.js"></script><script type="text/javascript">iFrameResize({log:true, checkOrigin:false})</script>
    </div>
  );
};