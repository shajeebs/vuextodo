<template>
  <div>
      <H3>Add Pet</H3>
      <div>
          <b-form @submit="onSubmit" @reset="onReset">
             <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="formData.first_name"
                required
                placeholder="Enter first name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Lastname:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="formData.last_name"
                required
                placeholder="Enter last name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Species:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="formData.species"
                :options="speciesTypes"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="Age:" label-for="input-4">
                <b-form-input
                id="input-4"
                v-model="formData.age"
                required
                placeholder="Enter age"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
  </div>
</template>

<script>
import  { mapActions } from 'vuex';
export default {
    name: "AddPet",
    data(){
        return {
            formData: {
                first_name: '',
                last_name: '',
                species: null,
                age: null
            },
            speciesTypes: [{ text: 'Select One', value: null }, 'cat', 'dog'],
        }
    },
    methods: {
        ...mapActions(['addPet']),
       onSubmit(e) {
            e.preventDefault();
            const { species, first_name, last_name, age } = this.formData;
            const payload = {
                species, 
                pet: { first_name, last_name, age }
            }
            this.addPet(payload)
            this.onReset()
       },
       onReset() {
            this.formData = {
                first_name: '',
                last_name: '',
                species: null,
                age: null
            }
       }
    }
}
</script>

<style scoped>

</style>
