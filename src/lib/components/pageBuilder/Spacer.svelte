<script>
  import { SettingsMenu } from '$lib/components/pageBuilder'
  let { allData = $bindable(), itemSet = $bindable(), position, data = $bindable() } = $props()
</script>


<div style="position:relative;" id={data.id}>
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="spacer"
      options={['height', 'classes']}
      position={position}
    />
  {/if}

  <div style={`background:#EEE;height:${data.settings.height[0]}${data.settings.height[1]}`}></div>

  {#if itemSet !== data.id}
    <a 
      href="?" 
      title="Select Spacer Block" 
      class="select_block" 
      aria-label="select Spacer block" 
      onclick={e => { 
        e.preventDefault()
        itemSet = data.id 
      }}
    ></a>
  {/if}

</div>


<style type="text/css">
  .select_block {
    position: relative;
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
  }
</style>