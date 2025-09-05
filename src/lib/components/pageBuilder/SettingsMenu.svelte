<script>
  import { structure, optionsPreset, blockIcons, blockPresets } from '$lib/components/pageBuilder/structure.js'
  import { deleteItem } from '$lib/components/pageBuilder/crud.js'
  let { allData = $bindable(), data = $bindable(), itemSet = $bindable(), id, options, position } = $props()
  let open = $state('')
  let optionsSet = optionsPreset.map(op => op.filter(o => options.includes(o.id)))
</script>

<div class="settings_bar">
  <div class="group">
    <div class="item icon">
      {@html blockIcons[id]}
    </div>
    
    {#if position[0] !== 0}
      <div class="item icon up">
        <a 
          href="?"
          title="Move item up"
          class="move_element_up"
          aria-label="move element up"
          onclick={e => {
            e.preventDefault()

            console.log({ data, position, itemSet })
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false">]
            <path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path>
          </svg>
        </a>
      </div>
    {/if}
    
    {#if position[0] + 1 !== position[1]}
      <div class="item icon down">
        <a 
          href="?"
          title="Move item down"
          class="move_element_down"
          aria-label="move element down"
          onclick={e => {
            e.preventDefault()
            console.log(allData, position)
            // console.log({ data, position, itemSet })
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false">]
            <path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path>
          </svg>
        </a>
      </div>
    {/if}
    
    <div class="item icon">
      <a 
        href="?"
        title="Delete Element"
        class="delete_element"
        aria-label="delete element"
        onclick={e => { 
          e.preventDefault()
          // deleteItem(data, itemSet)
          data = ''
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
      </a>
    </div>
    
    <div class="item">
      <a 
        href="?" 
        title="Select Heading Block" 
        class="deselect_block" 
        aria-label="select Heading block" 
        onclick={e => { 
          e.preventDefault()
          itemSet = ''
        }}
      >CLOSE</a>
    </div>
  </div>
  {#each optionsSet as group, groupId}
    <div class="group">
      {#each group as s}
        <div class="item">
          <a href="?" title={s.title} class="drop-button" aria-label={s.title} onclick={e => {
            e.preventDefault()
            open = open === s.id ? '' : s.id
          }}>{@html s.icon}</a>
        </div>
      {/each}

      {#if groupId === 0 && open === 'content-width'}
        <div class="dropdown">
          <h5>Content Width</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.width.content[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.width.content[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
              <option value={option}>{option}</option>
            {/each}

            </select>
          </div>
        </div>
      {:else if groupId === 0 && open === 'columnCount'}
        <div class="dropdown">
          <h5>Columns</h5>
          <div>
            <select 
              onchange={e => {                
                const currentData = [...data.data]
                const count = Number(e.target.value)
                if( currentData.length < count ) {
                  const create = [...Array(count - currentData.length)].map(x => ({ ...blockPresets.column, id: crypto.randomUUID() }))
                  data.data = [...currentData, ...create].filter(x => x)
                } else {
                  data.data = [...currentData].slice(0, count)
                }
              }}
              bind:value={data.settings.columnCount} 
            >
            {#each [1, 2, 3, 4, 5, 6] as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
          </div>
        </div>
      {:else if groupId === 0 && open === 'wide-width'}
        <div class="dropdown">
          <h5>View Width</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.width.wide[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.width.wide[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>
        </div>
      {:else if groupId === 0 && open === 'verticalAlign'}
        <div class="dropdown">
          <h5>Vertical Align</h5>
          <div>
            <ul class="selectList">
              {#each structure.verticalAlign as j}
                <li class={data.settings.verticalAlign === j.value ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={j.value}
                    onclick={e => { 
                    e.preventDefault() 
                    data.settings.verticalAlign = j.value
                  }}>
                    <span class="svg-wrap">{@html j.icon}</span>
                    <span>Vertical Align {j.value}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if groupId === 0 && open === 'textAlign'}
        <div class="dropdown">
          <h5>Text Align</h5>
          <div>
            <ul class="selectList">
              {#each structure.textAlign as j}
                <li class={data.settings.textAlign === j.value ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={j.value}
                    onclick={e => { 
                    e.preventDefault() 
                    data.settings.textAlign = j.value
                  }}>
                    <span class="svg-wrap">{@html j.icon}</span>
                    <span>Text align items {j.value}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if groupId === 0 && open === 'groupRow'}
        <div class="dropdown">
          <h5>Group or Row</h5>
          <div>
            <ul class="selectList">
              {#each structure.group as j}
                <li class={data.settings.groupRow === j.value ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={j.value}
                    onclick={e => { 
                    e.preventDefault() 
                    data.settings.groupRow = j.value
                  }}>
                    <span class="svg-wrap">{@html j.icon}</span>
                    <span>{j.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if groupId === 0 && open === 'justify'}
        <div class="dropdown">
          <h5>Justify</h5>
          <div>
            <ul class="selectList">
              {#each structure.justification as j}
                <li class={data.settings.justification === j.value ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={j.value}
                    onclick={e => { 
                    e.preventDefault() 
                    data.settings.justification = j.value
                  }}>
                    <span class="svg-wrap">{@html j.icon}</span>
                    <span>Justify items {j.value}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if groupId === 1 && open === 'border'}
        <div class="dropdown">
          <h5>Border</h5>
          <div>
            {#each ['Top', 'Right', 'Bottom', 'Left'] as dir, dirK}
              <div style="display:flex;align-items:center;">
                <span style="flex-grow:1;margin-right:5px;">{dir}</span>
                <select 
                  bind:value={data.settings.border[dirK][0]}
                  style="width:90px;"
                >
                  {#each ['solid', 'dotted', 'dashed'] as option}
                    <option value={option}>{option}</option>
                  {/each}
                </select>
                <input 
                  type="number" 
                  bind:value={data.settings.border[dirK][1]} 
                  style="width:60px"
                />
                <input 
                  type="text" 
                  bind:value={data.settings.border[dirK][2]} 
                  style="width:90px"
                />
              </div>
            {/each}
          </div>
        </div>
      {:else if groupId === 1 && open === 'borderRadius'}
        <div class="dropdown">
          <h5>Border Radius</h5>
          <div>
            {#each ['Top', 'Right', 'Bottom', 'Left'] as dir, dirK}
              <div style="display:flex;align-items:center;">
                <span style="flex-grow:1;margin-right:5px;">{dir}</span>
                <input 
                  type="number" 
                  bind:value={data.settings.borderRadius[dirK][0]} 
                  style="width:140px"
                />
                <select 
                  bind:value={data.settings.borderRadius[dirK][1]}
                  style="width:60px;"
                >
                  {#each structure.sizeTypes as option}
                    <option value={option}>{option}</option>
                  {/each}
                </select>
              </div>
            {/each}
          </div>
        </div>
      {:else if groupId === 1 && open === 'padding'}
        <div class="dropdown">
          <h5>Padding</h5>
          <div>
            {#each ['Top', 'Right', 'Bottom', 'Left'] as dir, dirK}
              <div style="display:flex;align-items:center;">
                <span style="flex-grow:1;margin-right:5px;">{dir}</span>
                <input 
                  type="number" 
                  bind:value={data.settings.padding[dirK][0]} 
                  style="width:140px"
                />
                <select 
                  bind:value={data.settings.padding[dirK][1]}
                  style="width:60px;"
                >
                  {#each structure.sizeTypes as option}
                    <option value={option}>{option}</option>
                  {/each}
                </select>
              </div>
            {/each}
          </div>
        </div>
      {:else if groupId === 1 && open === 'margin'}
        <div class="dropdown">
          <h5>Margin</h5>
          {#each ['Top', 'Right', 'Bottom', 'Left'] as dir, dirK}
            <div style="display:flex;align-items:center;">
              <span style="flex-grow:1;margin-right:5px;">{dir}</span>
              <input 
                type="number" 
                bind:value={data.settings.margin[dirK][0]} 
                style="width:140px"
              />
              <select 
                bind:value={data.settings.margin[dirK][1]}
                style="width:60px;"
              >
                {#each structure.sizeTypes as option}
                  <option value={option}>{option}</option>
                {/each}
              </select>
            </div>
          {/each}
        </div>
      {:else if groupId === 0 && open === 'height'}
        <div class="dropdown">
          <h5>Height</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.height[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.height[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>
        </div>
      {:else if groupId === 1 && open === 'minWidth'}
        <div class="dropdown">
          <h5>Min Width</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.minWidth[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.minWidth[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>
        </div>
      {:else if groupId === 1 && open === 'min-height'}
        <div class="dropdown">
          <h5>Min Height</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.minHeight[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.minHeight[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>
        </div>
      {:else if groupId === 1 && open === 'blockSpacing'}
        <div class="dropdown">
          <h5>Block Spacing</h5>
          <div style="display:flex;">
            <input 
              type="number" 
              bind:value={data.settings.blockSpacing[0]} 
              style="width:140px"
            />
            <select 
              bind:value={data.settings.blockSpacing[1]}
              style="width:60px;"
            >
              {#each structure.sizeTypes as option}
                <option value={option}>{option}</option>
              {/each}
            </select>
          </div>
        </div>
      {:else if groupId === 1 && open === 'background'}
        <div class="dropdown">
          <h5>Background</h5>
          <div>
            <input 
              type="text" 
              bind:value={data.settings.background} 
            />
          </div>
        </div>
      {:else if groupId === 1 && open === 'classes'}
        <div class="dropdown">
          <h5>Classes</h5>
          <div>
            <input 
              type="text" 
              bind:value={data.settings.classes} 
            />
          </div>
        </div>
      {:else if groupId === 0 && open === 'listType'}
        <div class="dropdown">
          <h5>List Type</h5>
          <div>
            <ul class="selectList">
              {#each structure.listType as lt}
                <li class={data.settings.listType === lt.value ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={lt.name}
                    onclick={e => {
                      e.preventDefault()
                      data.settings.listType = lt.value
                    }}
                  >
                    <span class="svg-wrap">{@html lt.icon}</span>
                    <span>{lt.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else if groupId === 0 && open === 'heading'}
        <div class="dropdown">
          <h5>Heading</h5>
          <div>
            <ul class="selectList">
              {#each structure.heading as head}
                <li class={data.settings.heading === head.id ? 'selected' : ''}>
                  <a 
                    href="?" 
                    title={head.name}
                    onclick={e => {
                      e.preventDefault()
                      data.settings.heading = head.id
                    }}
                  >
                    <span class="svg-wrap">{@html head.icon}</span>
                    <span>{head.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div><!-- GROUP-->
  {/each}
</div>

<style type="text/css">
  .settings_bar {
    width:100%;
    position: absolute;
    top:-52px;
    left:0;
    width:auto;
    max-width:400px;
    display: flex;
    z-index:99999;
  }
  .settings_bar .group {
    position: relative;
    display: flex;
    background:#FFF;
    border-left:solid 1px #000;
    border-top:solid 1px #000;
    border-bottom:solid 1px #000;
  }
  .settings_bar .group:last-child {
    border-right:solid 1px #000;
  }
  .settings_bar .group .item {
    position: relative;
  }
  .settings_bar .group .item.icon {
    width: 48px;
    height: 48px;
    padding: 12px;
  }
  .settings_bar .group .drop-button {
    display: flex;
    flex-direction: column;
    overflow:hidden;
    position: relative;
    box-sizing: border-box;
    width:48px;
    height:48px;
    padding:12px;
  }
  .settings_bar .group .dropdown {
    position: relative;
    position: absolute;
    top:100%;
    border:solid 1px #000;
    background:#FFF;
    min-width:200px;
    width:auto;
    margin-left:-1px;
  }
  .settings_bar .group .dropdown div {
    padding:5px;
  }
  .settings_bar .group .dropdown ul {
    list-style-type:none;
    margin:0;
    padding:0;
    font-size:0.95em;
  }
  .settings_bar input[type=number]::-webkit-inner-spin-button, 
  .settings_bar input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
  .settings_bar .group .dropdown li.selected {
    background:#133C63;
    color:#FFF;
    border-radius:8px;
  }
  .settings_bar .group .dropdown li.selected a {
    color:#FFF;
  }
  .settings_bar .group .dropdown li:last-child {
    padding-bottom:0;
  }
  .settings_bar .group .dropdown li a {
    display: flex;
    align-items: center;
    width:100%;
  }
  .settings_bar .group .dropdown li a span.svg-wrap {
    margin-right:10px;
    padding:5px 6px 2px;
  }
  .settings_bar h5 {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:0.85em;
    text-align:left;
    font-weight:600;
    margin:0 0 5px;
    padding:10px;
    border-bottom:solid 1px #CCC;
  }
  .settings_bar .selectList {
    list-style-type:none;
    margin:0;
    padding:0;
    display:block;
  }
  .settings_bar .selectList li {
    padding:0;
    width:100%;
    margin:0;
    position: relative;
    margin:0;
    padding:0;
    display:block;
  }
  .settings_bar .selectList span {
    display: inline-block;
    padding:0;
    position: relative;
  }
  .settings_bar .selectList .svg-wrap {
    border-radius:6px;
    border:solid 1px #CCC;
    padding:3px;
  }
  .settings_bar .selectList li a {
    padding:5px;
    display:block;
  }
  .deselect_block {
    position: relative;
    font-size:0.9em;
    height: 48px;
    padding: 12px;
    font-weight:bold;
    display: flex;
    align-items: center;
  }
</style>