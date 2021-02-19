import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
/* const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` */
const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 11}px,0)`
const trans2 = (x, y) => `translate3d(${x / 7 + 45}px,${y / 7 - 100}px,0)`
const trans3 = (x, y) => `translate3d(${x / 5 - 84}px,${y / 5 - 112}px,0)`
const trans4 = (x, y) => `translate3d(${x / 4.5}px,${y / 4.5}px,0)`




function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}

export default Card;
// ReactDOM.render(<Card />, document.getElementById('root'))
