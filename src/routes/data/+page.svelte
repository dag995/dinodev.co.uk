<script>
  import { base } from '$app/paths'
  import { enhance } from '$app/forms'
  let { data } = $props()
  let fields = $state(data.fields)
</script>

<div class="tidb-wrap">
  <div class="container mx-auto wrapper mx-860">
    <h1>Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {#each data.users as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.data.name}</td>
          <td>{user.data.role}</td>
          <td>{user.data.email}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  
    <div class="mw-660">
      <h2>Add</h2>
      <form
        method="POST" 
        action="?/add" 
        class="w-100"
        use:enhance={({ formElement, formData, action }) => {
          return async ({ result, update }) => {
            if( result.type === 'success' && result.data.error ) {
              console.log(result)
              return
            }
          }
        }}
      >
        <div class='formRow w-100 mt-2 mb-2'>
          <label for="name">Name</label>
          <input name="name" id="name" bind:value={fields.name} />
        </div>

        <div class='formRow w-100 mt-2 mb-2'>
          <label for="email">Email</label>
          <input name="email" id="email" bind:value={fields.email} />
        </div>

        <div class='formRow w-100 mt-2 mb-2'>
          <label for="role">Role</label>
          <input name="role" id="role" bind:value={fields.role} />
        </div>

        <div class='formRow w-100 mt-2 mb-2'>
          <button type="submit" class="button btn btn-primary">Add</button>
        </div>

      </form>
    </div>

  </div>
</div>

<style>
  .mw-660 { max-width:660px; margin:0 auto; }
</style>
