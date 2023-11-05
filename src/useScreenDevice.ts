import { useEffect, useState } from 'react'

const MOBILE_WIDTH = 640
export function useScreenDevice() {
  const [screenDevice, setScreenDevice] = useState<'mobile' | 'desktop'>('mobile')
  useEffect(() => {
    const device = () => window.innerWidth <= MOBILE_WIDTH ? 'mobile' : 'desktop'
    const resizeHandler = () => {
      setScreenDevice(device())
    }

    setScreenDevice(device())
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return screenDevice
}
