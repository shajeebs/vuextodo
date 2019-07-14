const cattts = [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', species:'cat' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw', species:'cat' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson', species:'cat' },
          { age: 38, first_name: 'Jami', last_name: 'Carney', species:'cat' }
        ];
const dogggs = [
        { age: 11, first_name: 'Benny', last_name: 'Macdonald', species:'dog' },
        { age: 22, first_name: 'Ramu', last_name: 'Shaw', species:'dog' },
        { age: 23, first_name: 'Jeane', last_name: 'Wilson', species:'dog' },
        { age: 12, first_name: 'Jumna', last_name: 'Carney', species:'dog' }
          ];

export default {
    todos: [], // todos: [ { id:1, title: "Todo One", completed: false },  ]
    cats: cattts,
    dogs: dogggs,
    pets: [...cattts, ...dogggs]
}