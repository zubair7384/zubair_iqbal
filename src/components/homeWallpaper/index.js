import React, { useState, useEffect } from "react"
import Wallpaper from "../../assets/svgs/homebanner.svg"
import window from "global"
import "./styles.scss"

export default function HomeWallpaper() {
  const mySpecialWindowFunction = () => {
    /* START HACK */
    if (!process.env.BROWSER) {
      global.window = {} // Temporarily define window for server-side
    }
    /* END HACK */

    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
  }
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="wallpaper_container"
      id="t"
      style={
        window.innerWidth > 768
          ? { transform: `translateY(-${offsetY * 0.4}px)` }
          : { transform: `translateY(-${offsetY * 0}px)` }
      }
    >
      <img className="wallpaper_image" src={Wallpaper} />
    </div>
  )
}
