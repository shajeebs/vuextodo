<template>
  <div>
      <div class="row">
          <div class="col">Animals Count: {{animalsCount}} </div>
          <div class="col" >Cats Count: {{catsCount.length}} </div>
          <div class="col" >Dogs Count: {{dogsCount.length}} </div>
          <div class="col" />
      </div>
      <div class="row">
        <div class="col">
            <h3>Cats for Adoption</h3>
            <b-table striped hover :items="cats">
                <template slot="first_name" slot-scope="data">
                <!--`data.value` is the value after formatted by the Formatter -->
                <!--<a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>-->
                <router-link :to="`/pet/cat/${data.index}`"> {{data.value}} </router-link>
                </template>
            </b-table>
        </div>
        <div class="col">
            <h3>Dogs for Adoption</h3>
            <b-table striped hover :items="dogs">
                <template slot="first_name" slot-scope="data">
                <router-link :to="`/pet/dog/${data.index}`"> {{data.value}} </router-link>
                </template>
            </b-table>
        </div>
    </div>
    <div class="row align-items-center">
        <div class="col" />
        <div class="col">
            <b-button block @click="togglePetForm" :variant="buttonVariant">{{ buttonText }}</b-button>
        </div>
        <div class="col" />
    </div>
    <div class="row ">
        <div class="col" />
        <div class="col" v-if="showPetForm">
            <AddPet />
        </div>
        <div class="col" />
    </div>
  </div>
</template>

<!-- <template>
  <div>
    <slot name="first_name"></slot>
    <slot name="last_name"></slot>
    <slot name="age"></slot>
  </div>
</template> -->


<script>
import { mapState, mapGetters } from 'vuex';
import AddPet from '@/components/AddPet.vue';

export default {
    name: "Pets",
    components: {
        AddPet
    },
    data() {
      return {
          showPetForm: false,
          buttonText: "Add Pet",
          buttonVariant: "success"
      }
    },
    methods:{
        togglePetForm() {
            this.showPetForm = !this.showPetForm;
            this.buttonText = this.showPetForm ? "Cancel": "Add Pet";
            this.buttonVariant = this.showPetForm ? "danger": "success";
        },
    },
    computed: {
      ...mapState(['cats']),
      ...mapState(['dogs']),
      ...mapGetters(['animalsCount', 'catsCount', 'dogsCount'])
    }
}
</script>

<style>

</style>
