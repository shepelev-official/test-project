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

  const sortingGroupMain = []
  const sortingGroupAdditional = []
  const sortingGroupOther = []


  return (
    <form>
      <h1>{props.title}</h1>
      <div className="form-row">

        {props.fields.map((itemForGroup, index) => {
          const identifierGroup = (group) => {
            if (group === "main") {
              return "col-md-8"
            }
            if (group === "additional") {
              return "col-md-4"
            }
          }

          if (itemForGroup.group === "main") {
            sortingGroupMain.push(props.fields[index])
          }

          if (itemForGroup.group === "additional") {
            sortingGroupAdditional.push(props.fields[index])
          }

          if (itemForGroup.group !== "additional" & itemForGroup.group !== "main") {
            sortingGroupOther.push(props.fields[index])
          }

          return (
            <div className={identifierGroup(itemForGroup.group)} key={index}>
              <label htmlFor={`${itemForGroup.label}`}>
                <div dangerouslySetInnerHTML={{__html: itemForGroup.label}}/>
                <input name={itemForGroup.name} type={itemForGroup.type} required={itemForGroup.required} className="form-control"/>
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
