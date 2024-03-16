import React, { useState } from 'react';

import './body.css';

const Body = (props) => {
  // Состояние для хранения содержимого textarea
  const [textareaContent, setTextareaContent] = useState('');

  // Обработчик изменений в textarea
  const handleTextareaChange = (event) => {
    setTextareaContent(event.target.value);
  };

  // Обработчик нажатия на кнопку "Сгенерировать"
  const handleGenerateClick = () => {
    // Вывод содержимого textarea в консоль
    console.log(textareaContent);

    // fetch('https://samplevault.ru/api/v1/samples', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ content: textareaContent }),
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     // Дополнительные действия при успешной отправке
    //     console.log('Data sent successfully');
    //   })
    //   .catch(error => {
    //     // Обработка ошибки
    //     console.error('There was an error sending data:', error);
    //   });

  };

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
                  <span className="body-text03"> Sample</span>
                  <span>Vault</span>
                </span>
              </div>
            </div>
          </div>
          <textarea
            className="body-frame24"
            placeholder="Напиши что бы ты хотел услышать"
            value={textareaContent} // Привязываем значение к состоянию textareaContent
            onChange={handleTextareaChange} // Обработчик изменений в textarea
          ></textarea>
        </div>
        <div className="body-frame33">
          <button className="body-frame251" onClick={handleGenerateClick}>
            <b className="body-text23">Сгенерировать</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
