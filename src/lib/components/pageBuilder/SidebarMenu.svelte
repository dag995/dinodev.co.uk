<script>
  import { SidebarItem } from '$lib/components/pageBuilder'
  let { itemSet = $bindable(), data = $bindable() } = $props()
  let viewable = $state([]) 
</script>

<div class="sidebar-menu">
  <SidebarItem
    bind:itemSet={itemSet}
    data={data}
    bind:viewable={viewable}
    parent={data.id}
  />
</div>