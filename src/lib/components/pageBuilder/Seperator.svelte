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
      id="seperator"
      options={['margin', 'classes']}
      position={position}
    />
  {/if}

  <div style="padding:20px 0;">
    <hr style={`margin:${data.settings.margin[0][0]}${data.settings.margin[0][1]} ${data.settings.margin[1][0]}${data.settings.margin[1][1]} ${data.settings.margin[2][0]}${data.settings.margin[2][1]} ${data.settings.margin[3][0]}${data.settings.margin[3][1]}`} />
  </div>

  {#if itemSet !== data.id}
    <a 
      href="?" 
      title="Select seperator Block" 
      class="select_block" 
      aria-label="select seperator block" 
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