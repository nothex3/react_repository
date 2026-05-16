import {  } from 'react';

const items = [
    {
        task: "выучить реакт",
        icon: "+",
        isComplited: false,
    },
    {
        task: "выучить тайпскрипт",
        icon: "-",
        isComplited: true,
    },
    {
        task: "выучить все вместе",
        icon: "*",
        isComplited: false,
    }
]

export const List = () => {

    return (
      <div>
        {
            items.map((item, index) => {
                return (
                    <section key={index} className={item.isComplited ? "completed" : ""}>
                        <span>{item.icon}</span>
                        <h4>{item.task}</h4>
                    </section>
                )
            })
        }
      </div>
    );
};
