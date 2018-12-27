<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ gender }}</td>
    <td>{{ birthYear }}</td>
    <td>{{ computedHeight }}</td>
    <td>{{ computedMass }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    gender: {
      type: String,
      default: null
    },
    birthYear: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    mass: {
      type: Number,
      default: null
    }
  },
  computed: {
    computedHeight() {
      return this.height ? `${this.height / 100}m` : "unknown";
    },
    computedMass() {
      return this.mass ? `${this.mass}kg` : "unknown";
    }
  }
};
</script>
