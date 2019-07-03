<template>
  <v-layout row>
    <v-flex xs12 md8 pt-3 offset-md2>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Список кораблей</v-toolbar-title>
        </v-toolbar>

        <v-list v-if="starShipsList.length">
          <v-list-group
            v-for="(item, index) in starShipsList"
            :key="index"
            prepend-icon="flight_takeoff"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <!--свойства корабля-->
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>trending_up</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.starship_class }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>euro_symbol</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.cost_in_credits }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>compare_arrows</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.length }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>date_range</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.consumables }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!--/свойства корабля-->

            <v-list-tile>
              <v-list-tile-content>
                <v-btn color="primary" class="ma-0" @click="GetStarShipDetails(item.url)">Подробнее</v-btn>
              </v-list-tile-content>
            </v-list-tile>

          </v-list-group>

          <div class="text-xs-center pt-5 pagination">
            <v-btn outline small fab color="primary" :disabled="!prevPage" @click="PrevPage">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn outline small fab color="primary" :disabled="!nextPage" @click="NextPage">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </div>
        </v-list>
        <v-card-text v-else>
          <p>Список кораблей пуст</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script src="./StarShipList.js"></script>
<style src="./StarShipList.scss" lang="scss" scoped></style>
