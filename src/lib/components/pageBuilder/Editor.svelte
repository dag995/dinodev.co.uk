<script>
  import { Group, Heading, Paragraph, Blockquote, Spacer, Seperator, Columns, Button, List, AddBlock } from '$lib/components/pageBuilder'
  let { itemSet = $bindable(), data = $bindable() } = $props()
</script>

{#each data as dv, dk}

  {#if dv.type === 'group'}

    <Group
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'columns'}

    <Columns
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />
  
  {:else if dv.type === 'heading'}
  
    <Heading
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'paragraph'}

    <Paragraph
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'button'}

    <Button
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'blockquote'}

    <Blockquote
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'spacer'}

    <Spacer
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'seperator'}

    <Seperator
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {:else if dv.type === 'list'}
    
    <List
      bind:allData={data}
      bind:data={data[dk]}
      bind:itemSet={itemSet}
      position={[dk, data.length]}
    />

  {/if}

{/each}