<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>

import NavBar from './NavBar.vue';

export default {
    name: "MainApp",
    props: {},
    components: { NavBar }
}
</script>