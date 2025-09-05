<script>
  import { SettingsMenu } from '$lib/components/pageBuilder'
  let { itemSet = $bindable(), position, data = $bindable() } = $props()
  let inputRef
</script>

<li style="position:relative;" id={data.id}>
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:data={data} 
      bind:itemSet={itemSet}
      id="listItem"
      options={['textAlign', 'padding', 'margin', 'classes']}
      position={position}
    />
  {/if}

  <textarea 
    class="listItem"
    placeholder="List item"
    bind:this={inputRef}
    bind:value={data.data} 
  ></textarea>

  {#if itemSet !== data.id}
    <a 
      href="?" 
      title="Select List Item Block" 
      class="select_block" 
      aria-label="select List Item block" 
      onclick={e => { 
        e.preventDefault()
        itemSet = data.id
        inputRef.focus()
      }}
    ></a>
  {/if}

</li>



<style type="text/css">
  textarea.listItem {
    border:0;
    margin:0;
    border-radius:0;
    outline: none;
    font-size:1em;
    padding:4px;
    height:24px;
    border-radius:0;
    resize: none;
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