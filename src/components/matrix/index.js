import React, { useState, useEffect, useRef } from "react"
import AOS from "aos"

import "./styles.scss"

export default function Matrix(props) {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)
  const hasWindow = typeof window !== "undefined" ? true : false

  useEffect(() => {
    AOS.init({
      duration: 500,
    })
    const handleScroll = () => {
      const currentScrollY = hasWindow && window.scrollY
      if (prevScrollY.current > currentScrollY && goingUp) {
        setGoingUp(false)
      }
      if (prevScrollY.current < currentScrollY && !goingUp) {
        setGoingUp(true)
      }

      prevScrollY.current = currentScrollY
      console.log(currentScrollY, "currentScrollY")
    }

    hasWindow &&
      window.addEventListener("scroll", handleScroll, { passive: true })

    return () => hasWindow && window.removeEventListener("scroll", handleScroll)
  }, [goingUp])
  return (
    <div
      data-aos={goingUp ? "fade-in" : "fade-out"}
      style={goingUp ? { display: "block" } : { display: "none" }}
      className={`matrix ${props.className} `}
    >
      <div className="d1 c1 de" style={{ left: "5px" }}>
        101<span>1</span>1010100101<span>j</span>zxc
      </div>
      <div className="d3 f1" style={{ left: "30px" }}>
        11001100101010<span>1</span>
      </div>
      <div className="d1 f2 c1" style={{ left: "60px" }}>
        11<span>0</span>101010101<span>1</span>
      </div>
      <div className="d2 f1" style={{ left: "80px" }}>
        1010010101<span>0</span>001101010
      </div>
      <div className="d4 c3 de" style={{ left: "110px" }}>
        10100<span>1</span>1010100011<span>0</span>1
      </div>
      <div className="d2 c1" style={{ left: "140px" }}>
        1010010100101010001<span>1</span>00100101
      </div>
      <div className="d3 f2 c1" style={{ left: "170px" }}>
        01<span>1</span>0101010
      </div>
      <div className="d1 c1" style={{ left: "185px" }}>
        101001<span>0</span>1010100101001001<span>1</span>001
      </div>
      <div className="d3 de" style={{ left: "200px" }}>
        00110011<span>1</span>001
      </div>
      <div className="d4 f1" style={{ left: "250px" }}>
        1001<span>1</span>100011
      </div>
      <div className="d2 de" style={{ left: "290px" }}>
        100101<span>1</span>00100010100010101
      </div>
      <div className="d3 f2" style={{ left: "310px" }}>
        10101010<span>1</span>101001010101
      </div>
      <div className="d1 f1" style={{ left: "350px" }}>
        1010101<span>0</span>101010010000011<span>0</span>111
      </div>
      <div className="d4 c1" style={{ left: "390px" }}>
        1011000111<span>0</span>1000
      </div>
      <div className="d2 de" style={{ left: "410px" }}>
        0010011<span>1</span>100101
      </div>
      <div className="d1 c1 de" style={{ left: "430px" }}>
        1100<span>0</span>0101010<span>4</span>10
      </div>
    </div>
  )
}
