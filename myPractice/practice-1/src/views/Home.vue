<template>
  <div class="home">
    <div v-if="res.length">Loading...</div>
    <div v-if="error">{{error}}</div>
    <div v-else class="container">

      <section class="sort-section">
        <h5>Search</h5>
        <input type="text" v-model="search">
        
        <h5>Buildings:</h5>
        <div v-for="building in res.buildings" :key="building['Building ID']" class="cbGroup">
          <input type="checkbox" v-model="bldgs" :value="building['Building Code']" :id="building['Building Code']">
          <label :for="building['Building Code']">{{building['Building Code']}}</label>
        </div>
        
        <h5>Unit Types:</h5>
        <div v-for="type in res.unitTypes" :key="type['Unit Type ID']" class="cbGroup">
          <input type="checkbox" v-model="types" :value="type['Unit Type']" :id="type['Unit Type']">
          <label :for="type['Unit Type']">{{type['Unit Type']}}</label>
        </div>
      </section>
      <section class="table-section">
        <div>
          <table>
            <thead>
              <tr>
                <th>Unit Name</th>
                <th>Unit Type</th>
                <th>Building</th>
                <th>Unit Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unit in units" :key="unit['Building Unit ID']">
                <td>{{unit['Reference Code']}}</td>
                <td>{{unit['Unit Type']}}</td>
                <td>{{unit['Building']}}</td>
                <td>{{unit['Rate']}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import getResources from '../composable/getResources'
import { computed, watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  setup(){
    const { res, error, load} = getResources()
    load()
    const bldgs = ref([])
    const types = ref([])
    const search = ref('')
    const units = ref([])

    const stopSet = watch(res, () => {
      bldgs.value = res.value.buildings.map(bldg => bldg['Building Code'])
      types.value = res.value.unitTypes.map(type => type['Unit Type'])
      units.value = res.value.units
    })

    watch(search, () => {
      console.log(search.value)
      units.value = res.value.units.filter(unit => unit['Reference Code'].includes(search.value)
       && types.value.includes(unit['Unit Type'])
       && bldgs.value.includes(unit['Building']))
    })
    
    watch(types, () => {
      console.log(types.value)
      units.value = res.value.units.filter(unit => types.value.includes(unit['Unit Type'])
       && bldgs.value.includes(unit['Building']))
    })
    watch(bldgs, () => {
      console.log(bldgs.value)
      units.value = res.value.units.filter(unit => bldgs.value.includes(unit['Building'])
       && types.value.includes(unit['Unit Type']))
    })
    

    return {res, error, bldgs, types, search, units}
  }
}
</script>

<style>

  label{
    color: #aaa;
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select{
    display: block;
    padding: 10px 6px;
    width: 70%;
    margin: auto;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #bbb;
    color: #555;
    background: inherit;
  }
  input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    /* top: 2px; */
  }
  .cbGroup{
    /* display: inline-flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: flex-start; */
    display:block;
    margin: 0 0 15px;
    padding: 0 15%;
    text-align: left;
  }
  .cbGroup label{
    display: inline;
    margin: 0 0 auto;
    font-size: 0.9em;
  }
  h5{
    text-align: start;
    margin: 10px 30px 10px;
    color: #555;
  }
  .container{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .sort-section{
    width: 30vw;
    display: inline;
    padding: 10px 0 10px 20px;
    margin: 10px 0;
    height: auto;
    border-right: 1px solid #444;
    min-height: 100px;
    overflow: hidden;
  }
  .table-section{
    width: 70vw;
    display: inline;
    padding: 10px 0 10px 20px;
  }
  
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td, table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even){background-color: #f2f2f2;}

  table tr:hover {background-color: #ddd;}

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #42b983;
    color: white;
  }
</style>