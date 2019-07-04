<template>
  <div>
    <v-toolbar fixed>
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title class="hidden-xs-only">ВКС России, гроза всея галактики!</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="GetStarShipsList">
        <span сlass="ml-3">Наш флот</span>
      </v-btn>
      <v-btn icon @click="SearchStarShips('')">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-progress-linear
      class="ma-0 mt-3 progress"
      :indeterminate="loading"
      color="secondary"
      height="3"
    ></v-progress-linear>
  </div>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss" scoped></style>
