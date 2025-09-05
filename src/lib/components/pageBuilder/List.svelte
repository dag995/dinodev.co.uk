<script>
  import { SettingsMenu, ListItem } from '$lib/components/pageBuilder'
  import { blockPresets } from '$lib/components/pageBuilder/structure.js'
  let { allData = $bindable(), itemSet = $bindable(), position, data = $bindable() } = $props()
</script>

<div style="position:relative;" id={data.id}>
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="list"
      options={['listType', 'padding', 'margin', 'classes']}
      position={position}
    />
  {/if}

  {#if data.settings.listType === 'unordered' }
    
    <ul>
      {#each data.data as item, itemID}
        <ListItem
          bind:data={data.data[itemID]}
          bind:itemSet={itemSet}
          position={[itemID, data.data.length]}
        />
      {/each}
    </ul>
  
  {:else}
  
    <ol>
      {#each data.data as item, itemID}
        <ListItem
          bind:data={data.data[itemID]}
          bind:itemSet={itemSet}
          position={[itemID, data.data.length]}
        />
      {/each}
    </ol>

  {/if}

  <a 
    href="?" 
    class="add_btn" 
    title="Add List Item"
    onclick={e => {
      e.preventDefault()
      const newBlock = blockPresets.listItem
      newBlock.id = crypto.randomUUID()
      data.data.push(newBlock)
    }}
  >+ List Item</a>

</div>


<style type="text/css">
  .add_btn {
    background: #000;
    color: #FFF;
    font-size:0.95em;
    padding: 10px 16px;
    border-radius: 4px;
    position: relative;
    display: inline-block;
  }
</style>