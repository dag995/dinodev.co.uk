<script>
  import { blocks, blockPresets, blockIcons } from '$lib/components/pageBuilder/structure.js'
  let open = $state(false)
  let { data = $bindable() } = $props()
</script>
<section class="add_block_wrap">
  <a 
    href="?" 
    title="Add Block" 
    class="add_block" 
    aria-label="add block" 
    onclick={e =>  { 
      e.preventDefault()
      open = !open
    }}
  >+</a>
  
  {#if open}
    <div class="dropmenu">
      <ul>
        {#each blocks as b}
          <li>
            <a 
              href="?" 
              title={b.title}
              onclick={e => {
                e.preventDefault()
                const newBlock = blockPresets[b.id]
                newBlock.id = crypto.randomUUID()
                if( b.id === 'columns' ) newBlock.data[0].id = crypto.randomUUID()
                data.push(newBlock)
                open = false
              }}
            >
              {@html blockIcons[b.id]}
              <span>{b.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style type="text/css">
  .add_block_wrap {
    position:relative;
    margin-top:20px;
    height:auto;
  }
  .add_block {
    background:#000;
    color:#FFF;
    padding:0 10px;
    font-size:2em;
    border-radius:4px;
    position: relative;
    display: inline-block;
  }
  .dropmenu {
    position: relative;
    position: absolute;
    left:0;
    margin-top:3px;
    background:#FFF;
    border-radius:6px;
    border:solid 1px #CCC;
    width:220px;
    z-index:10000;
  }
  .dropmenu ul {
    list-style-type: none;
    margin:0;
    padding:0;
  }
  .dropmenu ul li {
    border-bottom:solid 1px #CCC;
  }
  .dropmenu ul li a {
    display: flex;
    padding:6px 8px;
    align-items: center;
  }
  .dropmenu ul li a:hover {
    background:#EEE;
  }
  .dropmenu ul li a span {
    padding-left:10px;
  }
  .dropmenu ul li:last-child {
    border-bottom:0;
  }
</style>