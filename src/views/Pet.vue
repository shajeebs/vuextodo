<template>
    <div>
        <h2>Pet Adoption Details</h2>
        <h1>{{ animal.first_name}}</h1>
        Id          : <p>{{ $route.params.id}}</p>
        Species     : <p>{{ $route.params.species}}</p>
        First_name  : <p>{{ animal.first_name}}</p>
        Last_name   : <p>{{ animal.last_name}}</p>
        Age         : <p>{{ animal.age}}</p>
        <!--first_name  : {{ pet().first_name}}
        last_name   : {{ pet().last_name}}
        age         : {{ pet().age}}-->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return { animal:{} }
    },
    computed: {
        ...mapState(['cats', 'dogs'])
    },
    mounted() { //Life cycle methods
        this.animal = this[this.$route.params.species + 's'][this.$route.params.id]
    }
    // methods: {  //then in DOM -> first_name  : {{ pet().first_name}}
    //     pet(){
    //         //const animal = this.cats 
    //         // this['cats']
    //         const animals = this[this.$route.params.species + 's']
    //         const animal = animals[this.$route.params.id]
    //         return animal;
    //     }
    // }
}
</script>

<style>

</style>
