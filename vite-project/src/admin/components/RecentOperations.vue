<template>
    <div>
      <h3>Opérations récentes</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Date opération</th>
            <th>par</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(operation, index) in operations" :key="index">
            <td>
              <input type="checkbox" />
            </td>
            <td>{{ operation.operation }}</td>
            <td>{{ operation.date }}</td>
            <td>{{ operation.user }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecentOperations',
    props: {
      operations: {
        type: Array,
        required: true
      }
    }
  }
  </script>