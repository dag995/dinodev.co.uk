<script>
  import { page } from '$app/stores'
  let { data } = $props();
</script>

<svelte:head>
	<title>Work • Daniel Groves</title>
</svelte:head>

<div class="container mx-auto">
  <h1>Work</h1>
  <p>I currently work with the following companies providing business support solutions.</p>
  <div class="row">
    {#each data.work as work}
      <div class="col">
        <img src={`/logos/${work.logo}`} alt={work.title} title={work.title} />
        <h3>{work.title}</h3>
        {#if work.website}
          <p><a href={`https://www.${work.website}`} title={work.title}>www.{work.website}</a></p>
        {/if}
        <ul class="services">
          {#each work.services as service}
            <li>{service}</li>
          {/each}
        </ul>
        {@html work.about}
      </div>
    {/each}
  </div>
</div>

<style>
  .row {
    max-width:1240px;
    margin:0 auto;
    padding:0;
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap:2%;
  }
  .row .col {
    width:23%;
    flex-basis:23%;
    flex-grow:0;
    margin:10px 0;
    padding:0;
  }
  .row .col img {
    border-top:solid 1px #CCC;
    border-bottom:solid 1px #CCC;
  }
  .row .col ul.services {
    list-style-type:none;
    margin:0;
    padding:0;
    display:flex;
    flex-wrap: wrap;
    gap:6px;
  }
  .row .col h3 { 
    margin-top:10px;
    margin-bottom:16px;
  }
  .row .col ul.services li {
    padding:3px 6px;
    border-radius:4px;
    border:solid 1px #CCC;
    font-size:0.85em;
  }
  .btn.btn-primary {
    width:100%;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 0.9rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    border-radius: 6px;
    color: #FFF;
    background-color: var(--theme-red);
    border-color: var(--theme-red);
  }
  @media (max-width: 781px) {
    .row .col {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col {
      flex-basis: 100%;
      gap:0;
    }
  }
</style>