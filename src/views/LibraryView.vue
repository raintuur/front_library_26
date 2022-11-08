<template>
  <div>
    <div class="container">
      <div class="row justify-content-start">
        <CitySelectButton/>
        <div class="col-lg-9">
          <CityLibraryTable/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import CitySelectButton from "@/components/library_view_table/CitySelectButton";
import CityLibraryTable from "@/components/library_view_table/CityLibraryTable";

export default {
  name: "byCityView",
  components: {CityLibraryTable, CitySelectButton}
}
</script>

