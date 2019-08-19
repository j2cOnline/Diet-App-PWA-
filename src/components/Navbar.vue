<template>
  <nav>
    <v-toolbar flat app color="primary">
      <v-btn depressed=true flat=true color="transparent"  to="/">
      <v-img  max-height="60" max-width="85" min-width="30" position="center start" contain src="./img/logo.png"></v-img>
      </v-btn>
        <router-link  to="/">
          <v-toolbar-title  class="text-uppercase secondary--text">
          In-N-Out-Diet
          </v-toolbar-title>
        </router-link>
       <v-spacer></v-spacer>
      <v-btn left=true to="/about" class="accent--text" flat>About</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
