<script>
  import autosize from 'svelte-autosize'
  import { SettingsMenu } from '$lib/components/pageBuilder'
  let { allData, itemSet = $bindable(), position, data = $bindable() } = $props()
  let inputRef
</script>

<div style="position:relative;" id={data.id}>
  {#if itemSet === data.id}
    <SettingsMenu 
      bind:allData={allData}
      bind:data={data} 
      bind:itemSet={itemSet}
      id="heading"
      options={['heading', 'textAlign', 'padding', 'margin', 'classes']}
      position={position}
    />
  {/if}

  <textarea 
    class={`heading heading-${data.settings.heading}`}
    placeholder="Heading"
    bind:this={inputRef}
    use:autosize
    bind:value={data.data} 
  ></textarea>

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
  textarea.heading {
    border:0;
    margin:0;
    border-radius:0;
    outline: none;
    padding:10px 0;
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