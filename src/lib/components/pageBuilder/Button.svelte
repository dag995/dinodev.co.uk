<script>
  import { SettingsMenu } from '$lib/components/pageBuilder'
  let { allData = $bindable(), itemSet = $bindable(), position, data = $bindable() } = $props()
  let inputRef
</script>


<div 
  style={`
    padding:${data.settings.padding.map(p => `${p[0]}${p[1]}`).join(' ')};
    margin:${data.settings.margin.map(m => `${m[0]}${m[1]}`).join(' ')};
    border-top:${data.settings.border[0][0]} ${data.settings.border[0][1]}px ${data.settings.border[0][2]};
    border-right:${data.settings.border[1][0]} ${data.settings.border[1][1]}px ${data.settings.border[1][2]};
    border-bottom:${data.settings.border[2][0]} ${data.settings.border[2][1]}px ${data.settings.border[2][2]};
    border-left:${data.settings.border[3][0]} ${data.settings.border[3][1]}px ${data.settings.border[3][2]};
    border-radius:${data.settings.borderRadius.map(m => `${m[0]}${m[1]}`).join(' ')};
    position:relative;
  `}
  id={data.id}
>
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="button"
      options={['textAlign', 'verticalAlign', 'padding', 'margin', 'borderRadius', 'border', 'minWidth', 'classes', 'background']}
      position={position}
    />
  {/if}

  <input 
    class="button"
    placeholder="Button"
    bind:this={inputRef}
    bind:value={data.data} 
  />

  {#if itemSet !== data.id}
    <a 
      href="?" 
      title="Select Heading Block" 
      class="select_block" 
      aria-label="select Heading block" 
      onclick={e => { 
        e.preventDefault()
        itemSet = data.id 
        inputRef.focus()
      }}
    ></a>
  {/if}

</div>


<style type="text/css">
  /* input.button {
    border:0;
    padding:10px;
    margin:0;
    border-radius:0;
    outline: none;
    resize: none;
    background:#062e4b;
    color:#FFF;
    display:inline-block;
    width:auto;
  } */
  .select_block {
    position: relative;
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
  }
</style>