<template>
    <div>
        <h1>Cats for adoption</h1>
        <b-table striped hover :items="cats">
            <template v-slot:cell(name)="data">
                <a :href="`/pets/${data.index}`">
                    {{ data.value }}
                </a>
            </template>
        </b-table>
    </div>
</template>
<script>
import cats from '@/data/cats';

export default {
  data() {
    return {
      cats,
    };
  },
};
</script>

<style scoped>

</style>
