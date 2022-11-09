<template>
  <div>

    <div class="row">

      <div class="col-lg-3">
        <CityButtons/>
      </div>
      <div class="col-lg-6">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Linn</th>
            <th scope="col">Nimi</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td><button class="btn btn-outline-dark">Vaata</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>

<script>
import CityButtons from "@/views/CityButtons";

export default {
  name: "LibrariesView",
  components: {CityButtons},
  data: function () {

  }
}
</script>

