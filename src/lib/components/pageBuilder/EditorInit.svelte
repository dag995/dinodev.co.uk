<script>
  import { SidebarMenu, Editor, AddBlock } from '$lib/components/pageBuilder'
  let { itemSet = $bindable(), data = $bindable() } = $props()
</script>

<div style="display:flex;">
  
  <div style="flex-basis:0;flex-grow:1;max-width:320px;">
    <SidebarMenu
      bind:data={data}
      bind:itemSet={itemSet}
    />
  </div>
  
  <div style="flex-basis:0;flex-grow:1;">
    
    <Editor
      bind:data={data}
      bind:itemSet={itemSet}
    />

    <AddBlock bind:data={data} />

    <button onclick={e => {
      e.preventDefault()
      console.log($state.snapshot(data))
    }}>Log data</button>

  </div>
</div>

<style>
@import './editor.css';
</style>