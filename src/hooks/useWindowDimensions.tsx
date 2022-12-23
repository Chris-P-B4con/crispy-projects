import React from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

interface Props {
  threshold: number
  changeBackground?: boolean
}

export default function useWindowDimensions(props: Props) {
  const [isMobile, setIsMobile] = React.useState<boolean>()
  function handleResize() {
    const { width } = getWindowDimensions()
    if (width < props.threshold) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  return isMobile
}
