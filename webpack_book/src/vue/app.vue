<template>
  <div>
      <h2 class="hcolor"> {{ message }} </h2>
      <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'vApp-name',
  data() {
    return {
      message: 'Vue单文件组件'
    }
  }
}
</script>

<style scoped>
  .hcolor {
    color: green;
  }
</style>>