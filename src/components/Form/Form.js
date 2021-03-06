import React from 'react';
import classes from './Form.module.css'


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


  props.fields.forEach((itemForGroup, index) => {

      if (itemForGroup.group === "main") {
        sortingGroupMain.push(props.fields[index])
      }

      if (itemForGroup.group === "additional") {
        sortingGroupAdditional.push(props.fields[index])
      }

      if (itemForGroup.group !== "additional" && itemForGroup.group !== "main") {
        sortingGroupOther.push(props.fields[index])
      }
    }
  )


  return (
    <div className="container">
      <h1>{props.title}</h1>
      <form>
        <div className="row">
          <div className="col-md-8">
                {sortingGroupMain.map((item, index) => {
                  return (
                    <label htmlFor={`${item.label}`} key={index}>
                      <div dangerouslySetInnerHTML={{__html: item.label}}/>
                      <input name={item.name} type={item.type} required={item.required}
                             className="form-control mr-5"/>
                    </label>
                  )
                })
                }
          </div>

          <div className="col-md-4">
            {sortingGroupAdditional.map((item, index) => {
              return (
                <label htmlFor={`${item.label}`} key={index}>
                  <div dangerouslySetInnerHTML={{__html: item.label}}/>
                  <input name={item.name} type={item.type} required={item.required}
                         className="form-control"/>
                </label>
              )
            })
            }
          </div>

          <div className="col-md-12">
            <div className={classes.checkBox}>
              {sortingGroupOther.map((item, index) => {
                return (
                  <label htmlFor={`${item.label}`} key={index} className={classes.checkBox}>
                    <input name={item.name} type={item.type} required={item.required}
                           className="form-control"/>
                    <div dangerouslySetInnerHTML={{__html: item.label}}/>
                  </label>
                )
              })
              }
            </div>
          </div>
        </div>
      </form>
      <button className={classes.successButton}>{props.submit_button.text}</button>
    </div>
  )
}

export default Form;
