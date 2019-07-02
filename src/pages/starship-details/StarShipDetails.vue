<template>
  <v-layout row wrap class="pb-5 pt-3">
    <v-flex xs12 md8 offset-md2>
      <v-card v-if="starShipsDetails" class="mb-3">
        <v-img
          src="https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest/scale-to-width-down/1000?cb=20180903230846"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ starShipsDetails.name }}</h3>
          </div>
        </v-card-title>
      </v-card>
      <v-card v-else>
        <v-card-title>
          Извините, корабль не найден
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 md8 offset-md2>
      <v-data-table
        :headers="headers"
        :items="details"
        class="elevation-1"
        v-if="details.length"
        :rows-per-page-items="[20,40,{'text':'все детали','value':-1}]"
        rows-per-page-text="Количество записей"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.value }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script src="./StarShipDetails.js"></script>
<style src="./StarShipDetails.scss" lang="scss" scoped></style>
