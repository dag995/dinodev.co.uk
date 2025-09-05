<script>
  import { SettingsMenu, Column } from '$lib/components/pageBuilder'  
  let { allData = $bindable(), itemSet = $bindable(), position, data = $bindable() } = $props()
</script>

<section id={data.id}>
  
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="columns"
      options={['columnCount', 'verticalAlign', 'padding', 'margin', 'blockSpacing', 'classes']}
      position={position}
    />
  {/if}

  <div class="columns">
    {#each data.data as col, colCount}
      <Column 
        bind:data={data.data[colCount]}
        bind:itemSet={itemSet}
        position={colCount}
      />
    {/each}  
  </div>
</section>

<style type="text/css">
  section {
    position: relative;
    padding:20px;
    border:solid 1px #CCC;
  }
  .columns {
    display: flex;
    flex-wrap:nowrap;
    margin:0;
    padding:0;
    gap:1.5em;
  }
</style>