import React from 'react';


const Form = () => {

  const props = {
    title: "Свяжитесь с нами",
    fields: [
      {"name": "name", "group": "main", "type": "text", "label": "Имя", "required": true},
      {"name": "phone", "group": "main", "type": "phone", "label": "Телефон", "required": true},
      {"name": "email", "group": "main", "type": "email", "label": "E-mail", "required": true},
      {"name": "appointment_date", "group": "main", "type": "date", "label": "Дата записи", "required": true},
      {"name": "name", "group": "additional", "type": "textarea", "label": "Комментарий", "required": false},
      {
        "name": "agreement",
        "type": "checkbox",
        "label": "<span>Я даю согласие на обработку персональных данных согласно <a href='#'>политике конфиденциальности</a>.</span>"
      }
    ],
    field_groups: {
      "main": "col-md-8",
      "additional": "col-md-4"
    },
    submit_button: {
      "text": "Отправить заявку"
    }
  }


  return (
    <form>
      <h1>{props.title}</h1>
      <div className="form-row">
        {props.fields.map((item, index) => {


          const identifierGroup = (group) => {
            if (group === "main") {
              return "col-md-8"
            }
            if (group === "additional") {
              return "col-md-4"
            }
          }


          return (
            <div className={identifierGroup(item.group)} key={index}>
              <label htmlFor={`${item.label}`}>
                <div dangerouslySetInnerHTML={{__html: item.label}}/>
                <input name={item.name} type={item.type} required={item.required} className="form-control"/>
              </label>

            </div>
          )
        })
        }
      </div>
    </form>
  )
}

export default Form;
