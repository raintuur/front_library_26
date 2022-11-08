<template>
  <div>


    <table class="table table-success table-striped-columns" style=margin-left:100px>
      <thead>
      <tr>
        <th scope=col>Linn</th>
        <th scope=col>Nimi</th>
        <th scope=col></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Tallinn</td>
        <td>Keskraamatukogu</td>
        <td>
          <button type="button" class="btn btn-warning">Vaata</button>
        </td>
      </tr>
      <tr>
        <td>Tallinn</td>
        <td>Pääskula Raamatukogu</td>
        <td>
          <button type="button" class="btn btn-warning">Vaata</button>
        </td>
      </tr>
      <tr>
        <td>Tartu</td>
        <td>Tammelinna Raamatukogu</td>
        <td>
          <button type="button" class="btn btn-warning">Vaata</button>
        </td>
      </tr>
      <tr>
        <td>Pärnu</td>
        <td>Ranna Raamatukogu</td>
        <td>
          <button type="button" class="btn btn-warning">Vaata</button>
        </td>
      </tr>

      </tbody>
    </table>

  </div>
</template>
<script>
export default {
  name: 'CityLibraryTable',

}
</script>