import React from 'react';

const SampleItem = ({ imageUrl, genre, duration, soundName, musicStyle }) => {
  return (
      <div className="body1-frame92">
        <div className="body1-frame87">
          <div className="body1-frame86">
            <div className="body1-frame79">
              {/*<SampleButton imageUrl={imageUrl} />*/}
              <div className="body1-frame78">
                <div className="body1-frame75">
                                <span className="body1-text08">
                                    <span>{genre}</span>
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
                                    <span>{duration}</span>
                                </span>
                </div>
              </div>
              <div className="body1-frame7601">
                            <span className="body1-text12">
                                <span>{soundName}</span>
                            </span>
              </div>
              <div className="body1-frame80">
                            <span className="body1-text14">
                                <span>{musicStyle}</span>
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
  );
};

export default SampleItem;