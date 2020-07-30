<template>
  <div>
    <PetTable species="cats" :pets="cats"/>

  </div>
</template>
<script>
// import cats from "@/data/cats";
import { mapState } from 'vuex';
import PetTable from '../components/PetTable.vue';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['cats']),
  },
  components: {
    PetTable,
  },
};
</script>

<style scoped></style>
