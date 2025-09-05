<script>
  import { Editor, SettingsMenu, AddBlock } from '$lib/components/pageBuilder'  
  let { itemSet = $bindable(), position, data = $bindable() } = $props()
</script>

<section id={data.id}>
  
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:data={data} 
      bind:itemSet={itemSet}
      id="column"
      options={['verticalAlign', 'padding', 'margin', 'blockSpacing', 'classes']}
      position={position}
    />
  {/if}
  
  {#if itemSet !== data.id}
    <a 
      href="?" 
      title="Select Group Block" 
      class="select_block" 
      aria-label="select group block" 
      onclick={e =>  { 
        e.preventDefault()
        itemSet = data.id 
      }}
    ></a>
  {/if}

  <div class="column">
    <Editor
      bind:data={data.data}
      bind:itemSet={itemSet}
    />
    <AddBlock 
      bind:data={data.data} 
    />
  </div>

</section>

<style type="text/css">
  section {
    position: relative;
    padding:4px;
    display:flex;
    flex-basis:0;
    flex-grow:1;
  }
  .column {
    flex:0;
    flex-grow:1;
  }
</style>