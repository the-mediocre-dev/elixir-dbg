import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Resizable } from 're-resizable'

import ResizeHandle from './ResizeHandle'

const Explorer = () => {
  const [width, setWidth] = useState(64)
  const [resizing, setResizing] = useState(false)

  return (
    <Resizable
      handleComponent={{
        right: <ResizeHandle side="right" resizing={resizing} />,
      }}
      maxWidth="50%"
      minWidth="128px"
      size={{ width: width, height: '100%' }}
      onResizeStart={() => {
        setResizing(true)
      }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width)
        setResizing(false)
      }}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}>
      <Box w="full" h="full" bg="tomato">
        EXPLORER
      </Box>
    </Resizable>
  )
}

export default Explorer
