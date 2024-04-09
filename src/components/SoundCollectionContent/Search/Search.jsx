import React from 'react'

import './Search.css'

const Search = (props) => {
    return (
        <div className="song-info">
            <div className="frame168-frame168">
                <div className="frame168-searchbarsample">
                    <div className="frame168-searchsm">
                        <img
                            alt="searchsmI927"
                            src="/external/searchsmi927-k1jo.svg"
                            className="frame168-searchsm1"
                        />
                    </div>
                    <span className="frame168-text">
            <span>Поиск</span>
          </span>
                </div>
                <div className="frame168-frame70">
                    <div className="frame168-frame68">
            <span className="frame168-text2">
              <span>Сортировать по:</span>
            </span>
                    </div>
                    <div className="frame168-frame69">
            <span className="frame168-text4">
              <span>Недавние</span>
            </span>
                        <img
                            alt="chevrondown9286"
                            src="/external/chevrondown9286-3j1h.svg"
                            className="frame168-chevrondown"
                        />
                    </div>
                </div>
            </div>
        </div>
            )
}

export default Search
