<template>
  <div class="home">
    <h1>Adopt a new best-friend</h1>
    <button @click="togglePetForm" class="btn btn-primary">Add new Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group
        id="petName"
        label="Pet's Name:"
        label-for="petNameInput"
      >
        <b-form-input
          id="petNameInput"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter Name"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="petSpecies"
        label="Species:"
        label-for="petSpeciesSelection"
      >
        <b-form-select
          :options="['cats', 'dogs']"
          v-model="formData.species"
          required
        >
        </b-form-select>
      </b-form-group>
      <b-form-group
        id="petAge"
        label="Pet's Age:"
        label-for="petAgeInput"
      >
        <b-form-input
          id="petAgeInput"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter Age"
        >
        </b-form-input>
      </b-form-group>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="submit" class="btn btn-danger">Reset</button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
      },
    };
  },
  methods: {
    ...mapActions([
      'addPet',
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);

      // reset the form after
      this.formData = {
        name: '',
        age: 0,
        species: null,
      };
    },
  },
};
</script>
