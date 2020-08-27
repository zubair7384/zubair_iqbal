import React from "react"
import Wallpaper from "../../assets/svgs/homebanner.svg"

import "./styles.scss"

export default function HomeWallpaper() {
  return (
    <div className="wallpaper_container">
      <img className="wallpaper_image" src={Wallpaper} />
    </div>
  )
}
