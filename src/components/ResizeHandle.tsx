import React, { useState } from 'react'

import { Box, Fade } from '@chakra-ui/react'

interface ResizeHandleProps {
  side: Side
  resizing: boolean
}

const ResizeHandle = ({ side, resizing }: ResizeHandleProps) => {
  const [hover, setHover] = useState(false)

  const onMouseOver = () => setHover(true)

  const onMouseLeave = () => setHover(false)

  return (
    <Fade
      in={hover || resizing}
      transition={{
        enter: { duration: 0.2, delay: 0.25 },
        exit: { duration: 0.2, delay: 0.25 },
      }}>
      <Box
        w={side === 'left' || side === 'right' ? '10px' : 'full'}
        h={side === 'top' || side === 'bottom' ? '10px' : 'full'}
        bg="red"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}></Box>
    </Fade>
  )
}

export default ResizeHandle
