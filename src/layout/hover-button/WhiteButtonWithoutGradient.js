

import React from 'react';
import './TronButtonRequestADemo.css';

const WhiteButtonWithoutGradient = (props) => {
  return (
  <>
      <div className="btn-base--tron-radial1">
        <div className="radial-embed-nav1 w-embed">
          <svg
            id="btn-tron_nav1"
            data-name="Layer-svg-tron_nav"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 122 52"
          >
            <defs>
              <linearGradient
                id="linear-gradient-tronnav"
                x1="0"
                y1="26"
                x2="122"
                y2="26"
                gradientTransform="translate(0 36.72) "
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1ab2ff"></stop>
                <stop offset=".5" stopColor="#1ab2ff"></stop>
                <stop offset="1" stopColor="#ffb258"></stop>
              </linearGradient>
            </defs>
            <g id="icon_tron_nav" data-name="Layer-icon-tron_nav">
              <path
                className="tron-icon_nav2"
                d="M96,3 H26 A13,13 0 0 0 13,16 V16 A13,13 0 0 0 26,29 H96 A13,13 0 0 0 109,16 V16 A13,13 0 0 0 96,3 Z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="btn-base--tron-hover2">
        <div
          className="tron-hover-rotate1 small1"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateZ(-36deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        ></div>
      </div>
      <div className="btn-base--black3">
        <div className="text-btn--nav2">{props.text}</div>
      </div>
  </>
  );
};

export default WhiteButtonWithoutGradient;

