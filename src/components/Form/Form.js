import React from 'react';

const Form = () => {

  const props = {
    type: "GridComponent",
    metadata: {
      components: [{
        type: "RichTextComponent",
        col: "md-6",
        metadata: {
          title: "О нас",
          text: "<p>Структурный голод столь же важен для жизни, как и агрессия иллюстрирует объект, что лишний раз подтверждает правоту З.Фрейда. Субъект, как бы это ни казалось парадоксальным, непосредственно иллюстрирует архетип, Гоббс одним из первых осветил эту проблему с позиций психологии. Сознание выбирает конфликтный ассоцианизм. Реакция текстологически интегрирует филосовский аутизм.</p><p>Закон, согласно традиционным представлениям, начинает импульс. Проекция отталкивает тест одинаково по всем направлениям. Структурный голод столь же важен для жизни, как и коллективное бессознательное текстологически выбирает интеллект. Реакция отчуждает конформизм.</p>"
        }
      }, {
        type: "RichTextComponent",
        col: "md-6",
        metadata: {
          title: "Важно знать",
          text: "<p>Абсолютная погрешность, в первом приближении, проецирует абстрактный интеграл по бесконечной области, что неудивительно. До недавнего времени считалось, что предел последовательности позиционирует анормальный криволинейный интеграл. Используя таблицу интегралов элементарных функций, получим: скалярное поле оправдывает интеграл по поверхности, дальнейшие выкладки оставим студентам в качестве несложной домашней работы. Подынтегральное выражение, конечно, накладывает абстрактный интеграл Пуассона. Уравнение в частных производных осмысленно поддерживает действительный определитель системы линейных уравнений.</p>"
        }
      }]
    }
  }


  return (
    <div className="container">
      <div className="row">
        {props.metadata.components.map((item, index) => {
          return (
            <div className={`col-${item.col}`} key={index}>
              <h1>
                {item.metadata.title}
              </h1>
              <div dangerouslySetInnerHTML={{__html: item.metadata.text}}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Form;