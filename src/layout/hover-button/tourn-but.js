import React from 'react';
import './TronButton.css';

const TronButton = (props) => {
  return (
  <>
      <div className="btn-base--tron-radial">
        <div className="radial-embed-nav w-embed">
          <svg
            id="btn-tron_nav"
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
                gradientTransform="translate(0 36.72)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#1ab2ff"></stop>
                <stop offset=".5" stopColor="#1ab2ff"></stop>
                <stop offset="1" stopColor="#ffb258"></stop>
              </linearGradient>
            </defs>
            <g id="icon_tron_nav" data-name="Layer-icon-tron_nav">
              <path
                className="tron-icon_nav"
                d="M96,3 H26 A23,23 0 0 0 3,26 V26 A23,23 0 0 0 26,49 H96 A23,23 0 0 0 119,26 V26 A23,23 0 0 0 96,3 Z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="btn-base--tron-hover">
        <div
          className="tron-hover-rotate small"
          style={{
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateZ(-36deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        ></div>
      </div>
      <div className="btn-base--black">
        <div className="text-btn--nav sequel_sans">{props.text}</div>
      </div>
  </>
  );
};

export default TronButton;

