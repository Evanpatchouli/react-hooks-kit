import { useState, useEffect } from 'react'

function useDimensionsById(id: string) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  })

  useEffect(() => {
    const observeTarget = document.getElementById(id)
    if (!observeTarget) return

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          top: entry.contentRect.top,
          left: entry.contentRect.left,
        })
      })
    })

    resizeObserver.observe(observeTarget)

    return () => {
      resizeObserver.unobserve(observeTarget)
    }
  }, [id]) // 每次id变化时重新获取

  return dimensions
}

export default useDimensionsById
