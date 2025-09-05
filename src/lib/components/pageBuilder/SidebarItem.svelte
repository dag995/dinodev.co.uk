<script>
  import Sortable from 'sortablejs'
  import { SidebarItem } from '$lib/components/pageBuilder'
  import { blockIcons, blockTitles } from '$lib/components/pageBuilder/structure.js'

  let { viewable = $bindable(), itemSet = $bindable(), data = $bindable(), parent } = $props()

  function initSortable(list) {
    const sortable = new Sortable(list, {
      group: {
        name: 'sortable',
        put: true
      },
      animation: 200,
      onSort() {
        const items = data
        const order = sortable.toArray()
        const allItems = items.flat()
        console.log({
          order: order, 
          allItems: allItems, 
          items: items
        })
      },
    })
  }
</script>

<ul use:initSortable data-list-index={parent}>
  {#each data as dataItem}
    <li data-id={dataItem.id}>
      <a 
        href="?"
        class={dataItem.id === itemSet ? 'selected' : '' }
        onclick={e => {
          e.preventDefault()
          itemSet = dataItem.id
        }}
      >{@html blockIcons[dataItem.type]} {blockTitles[dataItem.type]}</a>
      
      
      {#if Array.isArray(dataItem.data) && dataItem.data.length}
        <a 
          href="?" 
          title="Show / Hide" 
          class={`menu_show_hide${viewable.includes(dataItem.id) ? ' open' : ''}${dataItem.id === itemSet ? ' selected' : '' }`}
          aria-label="show or hide"
          onclick={e => {
            e.preventDefault()
            if( viewable.includes(dataItem.id) ) {
              viewable = viewable.filter(v => v !== dataItem.id)
            } else {
              viewable = [...viewable, dataItem.id]
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"></path></svg>
        </a>
        {#if viewable.includes(dataItem.id)}
          <SidebarItem
            bind:itemSet={itemSet}
            bind:viewable={viewable}
            data={dataItem.data}
            parent={data.id}
          />
        {/if}
      {/if}
    </li>
  {/each}
</ul>