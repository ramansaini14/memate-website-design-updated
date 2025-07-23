import React, { useEffect, useState } from 'react'
import style from './less-busyness.module.scss'
import './videostyles.css'
import ReactPlayer from 'react-player'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PlayIconVideo from '../../svg/PlayIconVideo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PauseIconVideo from '../../svg/PauseIconVideo';
const LessBusyness = () => {


  const [open, setOpen] = useState(false);
  const [fromUrlParam, setFromUrlParam] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setFromUrlParam(false);
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('intro_video')) {
      setFromUrlParam(true);
      onOpenModal();
    }
  }, []);

  return (
    <>
      <div className={style.shelfgradientwrap}>
        <div className={style.shelfgradient}>
          <div className={style.lessContainers}>
            <h3>More Business - Less Busyness</h3>
            <p>
              You can send a quote in just a few clicks, convert it into a project, and assign team members instantly.
              <br />Project timelines, expenses, client chats, invoices - it’s all right here.
            </p>

            <div className={style.videoWrapper}>
              <div className={style.videoWrapper1}></div>
              <div className={style.videoWrapperv}>
                <video
                  width="100%"
                  height="100%"
                  
                  // controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={style.reactPlayer}
                >
                  <source src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/memate-intro-c.mp4" type="video/mp4" />
                  {/* <track
                    src="https://yourdomain.com/path-to-captions.vtt"
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  /> */}
                  Your browser does not support the video tag.
                </video>

                <div className={style.videopopupwrap}>
                  <button className={style.videoPlayIcon} onClick={onOpenModal} aria-label="Play video"><PlayIconVideo /></button>
                  <Modal open={open} onClose={onCloseModal} center>
                    <div style={{ position: 'relative' }}>
                    <video
                  width="100%"
                  height="100%"
                  style={{backgroundColor: 'white', borderRadius: '40px'}}
                  // controls
                  autoPlay
                  loop
                  playsInline
                  className={style.reactPlayer}
                >
                  <source src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/video/memate-intro-full.mp4" type="video/mp4" />
                  {/* <track
                    src="https://yourdomain.com/path-to-captions.vtt"
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  /> */}
                  Your browser does not support the video tag.
                </video>

                      {fromUrlParam && (
                        <>

                          <button className="videoPlayIconIn" onClick={() => setIsPlaying(prev => !prev)}>{isPlaying ? < PauseIconVideo /> : <PlayIconVideo />}</button>
                        </>
                      )}
                    </div>
                  </Modal>

                </div>
              </div>
              <div className={style.videoWrapper2}></div>
              <div className={style.videooverlyImage}>
                <LazyLoadImage
                  alt="CRM for Small Business"
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/video-sticky-img-min.png"
                  effect="blur"
                />


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LessBusyness
