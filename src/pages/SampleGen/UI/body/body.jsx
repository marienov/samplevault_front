import React from 'react'

import './body.css'

const Body = (props) => {
  return (
    <div className="body-container">
      <div className="body-body">
        <div className="body-frame34">
          <div className="body-title3text">
            <div className="body-frame25">
              <span className="body-text">
                <span>
                  Сгенерировать сэмпл by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="body-logo">
              <div className="body-logotext">
                <span className="body-text02">
                  <span className="body-text03"> Sample</span>
                  <span>Vault</span>
                </span>
              </div>
            </div>
          </div>
          <textarea className="body-frame24" placeholder="Напиши что бы ты хотел услышать"></textarea>
        </div>
        <div className="body-frame33">
          <div className="body-frame32">
            <div className="body-frame30">
              <div className="body-text07">
                <span className="body-text08">
                    <span>Способ генерации</span>
                </span>
              </div>
              <div className="body-text07">
                <span className="body-text08">
                  <span>Длительность</span>
                </span>
              </div>
            </div>
            <div className="body-frame31">
              <div className="body-dropdowntrack">
                <span className="body-text16">
                  <span>Промпт</span>
                </span>
                <div className="body-chevron">
                  <img
                    src="../external/chevrondowni114-ktl.svg"
                    alt="chevrondownI114"
                    className="body-chevrondown"
                  />
                </div>
              </div>
              <div className="body-frame29">
                <div className="body-frame26">
                  <span className="body-text18">
                    <span>00</span>
                  </span>
                </div>
                <div className="body-frame28">
                  <span className="body-text20">:</span>
                </div>
                <div className="body-frame27">
                  <span className="body-text21">
                    <span>00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="body-frame251">
            <b className="body-text23" placeholder="Сгенерировать">
              {/* <span>Сгенерировать сэмпл</span> */}
            </b>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Body
