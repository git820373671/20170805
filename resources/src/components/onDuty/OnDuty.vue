<template>
  <div>
    <menu-duty></menu-duty>

  </div>
</template>
<script>
  import MenuDuty from '../components/onDuty/MenuDuty'

  export default {
    name: 'onDuty',
    data: function () {
      return {}
    },
    components: {
      MenuDuty: MenuDuty
    }
  }
</script>
