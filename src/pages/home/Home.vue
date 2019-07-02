<template>
  <v-layout>
    <v-flex xs12 md8 mt-5 offset-md2>
      <v-card>
        <v-img
          src="https://vignette.wikia.nocookie.net/starwars/images/d/da/Executorbridge.jpg/revision/latest/scale-to-width-down/1000?cb=20120110005354"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-2">Мощь имперского флота несокрушима</h3>
            <div>
              Соединение сил привело к необходимому сочетанию воздушной и космической сферы как смежных областей,
              для более удобного контроля за ними. Создание данных сил обусловлено ситуацией на мировой арене,
              изменениями при перевооружении других государств, увеличением значимости космического сектора для
              военно-экономического и социального прогресса.
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" to="/starships/null">Наш флот</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss" scoped></style>
