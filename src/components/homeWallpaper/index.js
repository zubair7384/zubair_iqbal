import React, { useState, useEffect } from "react"
import Wallpaper from "../../assets/svgs/homebanner.svg"
import "./styles.scss"

export default function HomeWallpaper() {
  const [offsetY, setOffsetY] = useState(0)
  const hasWindow = typeof window !== "undefined" ? true : false

  const handleScroll = () => setOffsetY(hasWindow && window.pageYOffset)
  useEffect(() => {
    hasWindow && window.addEventListener("scroll", handleScroll)

    return () => hasWindow && window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="wallpaper_container"
      id="t"
      style={
        hasWindow && window.innerWidth > 768
          ? { transform: `translateY(-${offsetY * 0.4}px)` }
          : { transform: `translateY(-${offsetY * 0}px)` }
      }
    >
      <img className="wallpaper_image" src={Wallpaper} />
    </div>
  )
}
