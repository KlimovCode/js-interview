import React from 'react'

export const JsTheory = () => {
  return (
    <div className="conteiner">
      <div className="accordion" id="accordionExample">

        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                В чем разница между null и undefined?
                </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              <h3>Для начала давайте поговорим о том, что у них общего</h3>
              <p>Во-первых, они принадлежат к 7 «примитивам» (примитивным типам) JS: 'string', 'number', 'null',
                  'undefined', 'boolean', 'symbol', 'bigint'</p>
              <p>Во-вторых, они являются ложными значениями, т.е. результатом их преобразования в логическое значение
                  с помощью Boolean() или оператора "!!" является false</p>
              <h3>Ладно, теперь о различиях</h3>
              <p>
                undefined («неопределенный») представляет собой значение по умолчанию:
                <ul>
                  <li>переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной
                    переменной;</li>
                  <li>функции, которая ничего не возвращает явно, например, console.log(1);</li>
                  <li>несуществующего свойства объекта.</li>
                </ul>
              </p>
              <p>null — это «значение отсутствия значения». null — это значение, которое присваивается переменной
                  явно.</p>
              <p>При сравнении null и undefined мы получаем true, когда используем оператор "==", и false при
                  использовании оператора "===".</p>
            </div>
          </div>
        </div>
      </div>
      Разница между параметром и аргументом у финкции.
    </div>
  )
}