import React from 'react'

import { Helmet } from 'react-helmet'

import './body1.css'
import { SampleButton } from '../../../../components/UI/SampleInfo/SampleButton'

const Body1 = (props) => {
  return (
    <div className="body1-container">
      <div className="body1-body1">
        <div className="body1-filtertype">
          <div className="body1-frame71">
            <span className="body1-text">
              <span>Имя</span>
            </span>
          </div>
          <div className="body1-frame72">
            <span className="body1-text02">
              <span>Тип</span>
            </span>
          </div>
          <div className="body1-frame73">
            <span className="body1-text04">
              <span>Инструмент</span>
            </span>
          </div>
          <div className="body1-frame74">
            <span className="body1-text06">
              <span>Жанр</span>
            </span>
          </div>
        </div>
        <div className="body1-frame92">
          <div className="body1-frame87">
            <div className="body1-frame86">
              <div className="body1-frame79">
                <SampleButton imageUrl = '/SongImgs/song1.png' />
                <div className="body1-frame78">
                  <div className="body1-frame75">
                    <span className="body1-text08">
                      <span>Ambient Electronica</span>
                    </span>
                  </div>
                  <img
                    src="/external/equalizer1147-p35f.svg"
                    alt="equalizer1147"
                    className="body1-equalizer"
                  />
                </div>
              </div>
              <div className="body1-frame85">
                <div className="body1-frame77">
                  <img
                    src="/external/equalizer1147-hpdj.svg"
                    alt="equalizer1147"
                    className="body1-equalizer01"
                  />
                  <div className="body1-frame76">
                    <span className="body1-text10">
                      <span>0:03</span>
                    </span>
                  </div>
                </div>
                <div className="body1-frame7601">
                  <span className="body1-text12">
                    <span>Kick</span>
                  </span>
                </div>
                <div className="body1-frame80">
                  <span className="body1-text14">
                    <span>Hip Hop</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="body1-frame83">
              <div className="body1-frame81">
                <div className="body1-star01">
                  <img
                    src="/external/star01i114-hfih.svg"
                    alt="star01I114"
                    className="body1-star0101"
                  />
                </div>
              </div>
              <div className="body1-frame82">
                <div className="body1-download01">
                  <img
                    src="/external/download01i114-edc2.svg"
                    alt="download01I114"
                    className="body1-download0101"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body1
