<template>
  <section>
    <base-card>
      <h2>{{ fullNames }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectCoach.fristName + ' ' + this.selectCoach.lastName;
    },
    areas() {
      return this.selectCoach.areas;
    },
    rate() {
      return this.selectCoach.hourlyRate;
    },
    description() {
      return this.selectCoach.description;
    },
    contactLink() {
      return this.$store.path + '/' + this.id + '/contact';
    }
  },
  created() {
    this.selectCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>
