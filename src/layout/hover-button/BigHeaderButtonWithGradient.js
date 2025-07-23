import React from 'react'
import "./BigHeaderButtonWithGradient.css";
import { Button } from "react-scroll";

const BigHeaderButtonWithGradient = (props) => {
  return (
    <>
          <div
            style={{
              // background: 'linear-gradient(90deg, #1ab2ff 0%, #ffb258 100%)',
              border: props.background === 'white' ? '2px solid transparent' : '2px solid black',
              backgroundImage: props.background === 'white' ? `linear-gradient(${props.background}, ${props.background}), linear-gradient(90deg, #1ab2ff 0%, #ffb258 100%)` : '',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              backgroundColor: `${props.background}`,
              color: props.color,
              padding: "14px 73px",
              borderRadius: "48px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: '400',
              fontFamily: 'sequel_sans',
              whiteSpace: 'nowrap',
            }}
            className="HeaderButtonHover"
          >
            {props.text}
          </div>
        </>
  )
}

export default BigHeaderButtonWithGradient
