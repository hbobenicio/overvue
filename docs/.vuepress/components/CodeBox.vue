<template>
  <div class="CodeBox">
    <div class="CodeBox-header">
      <ul>
        <li @click="currentTab = 'ui'" :class="{active: currentTab === 'ui'}">UI</li>
        <li @click="currentTab = 'code'" :class="{active: currentTab === 'code'}">Code</li>
      </ul>
    </div>
    <div class="CodeBox-body">
      <slot name="ui" v-if="currentTab === 'ui'" />
      <div v-if="currentTab === 'code'" class="language-html" ref="code"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['code'],

  updated() {
    this.$nextTick(function(){
      this.$refs.code.innerHTML = this.code;
    });
  },

  data() {
    return {
      currentTab: 'ui'
    }
  }
}
</script>

<style scoped>
.CodeBox {
  border: 1px solid #4f504d;
}

.CodeBox-header {
  background-color: #eee;
  top: 0;
  left: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  list-style-type: none;
  padding: 5px 10px;
  cursor: pointer;
}

li.active {
  border-bottom: 2px solid blue;
  font-weight: bold;
}
</style>
