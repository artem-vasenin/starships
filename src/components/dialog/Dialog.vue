<template>
  <v-dialog :value="searchDialog" max-width="600">
    <v-card>
      <v-card-title class="headline">Поиск по наименованию корабля</v-card-title>

      <v-card-text>
        <v-text-field
          label="Поиск по названию корабля"
          color="primary"
          v-model="search"
          @keydown="PostMessageKeydown"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat="flat" @click="CloseDialog">Отмена</v-btn>
        <v-btn color="primary" flat="flat" @click="SearchStarShips">Поиск</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./Dialog.js"></script>
<style src="./Dialog.scss" lang="scss" scoped></style>
