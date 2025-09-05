<script>
  import { Editor, SettingsMenu, AddBlock } from '$lib/components/pageBuilder'  
  let { allData, itemSet = $bindable(), position, data = $bindable() } = $props()
</script>

<section id={data.id} class="group">
  
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="group"
      options={['content-width', 'groupRow', 'justify', 'padding', 'margin', 'min-height', 'blockSpacing', 'classes', 'background']}
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

  {#if data.data.length}
    <div style={`background:${data.settings.background} ${data.settings.groupRow === 'row' ? 'display:flex; flex-direction:row; gap:1em;' : '' }`}>
      <Editor
        bind:data={data.data}
        bind:itemSet={itemSet}
      />
    </div>
  {/if}
  
  <AddBlock 
    bind:data={data.data}
  />
</section>

<style type="text/css">
  section {
    position: relative;
    padding:20px;
    border:solid 1px #CCC;
  }
  .select_block {
    position: relative;
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
  }
</style>