<template>
  <div class="col col-lg-8">
    <div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">Linn</th>
          <th scope="col">Nimi</th>
          <th scope="col"></th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="locationInfo in libraryLocationInfo" :key="locationInfo.libraryName">
          <th scope="row">{{ locationInfo.cityName }}</th>
          <td>{{ locationInfo.libraryName }}</td>
          <td>
            <button type="button" class="btn btn-outline-primary col-lg-6">
              Vaata
            </button>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryLocationsTable',
  props: {
    libraryLocationInfo: {}
  }
}
</script>