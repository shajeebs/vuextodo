export default {
    allTodos: (state) => state.todos,
    animalsCount: (state) => { return (state.cats.length + state.dogs.length); },
    catsCount: (state) => { return (state.pets.filter(p => p.species === 'cat') ); },
    dogsCount: (state) => { return (state.pets.filter(p => p.species === 'dog') ); }
}