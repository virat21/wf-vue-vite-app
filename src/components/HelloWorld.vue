<template>
    <h1>My Extension</h1>
  
    <div class="card">
      <button type="button" @click="handleSubmit">Add text here</button>
    </div>
  </template>
  
  <script lang="ts">
  declare var webflow: any;
  export default {
    methods: {
      async handleSubmit(event: any) {
        event.preventDefault();
        const el = await webflow.getSelectedElement();
        el.setTextContent("testing 123");
        el.save();
      },
    },
  };
  </script>
  
  <style>
  /* Your component's styles here */
  </style>
  
  <style scoped>
  .read-the-docs {
    color: #888;
  }
  </style>