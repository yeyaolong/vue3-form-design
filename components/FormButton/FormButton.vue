<template>
  <div :class="['form-button', 'y-button-' + type]" @click="handleClick">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'FormButton',
  components: {
  },
  props: {
      type: {
          default: 'default',
          type: String
      }
  },
  setup: (props, ctx) => {
      const handleClick = function() {
          ctx.emit('click');
      }

      return {
          handleClick
      }
  }
})
</script>

<style lang="less">
@import './FormButton.less';
</style>
