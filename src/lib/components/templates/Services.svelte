<script>
  const services = [
    { title: 'Consultancy solutions', header: 'Consultancy solutions', url: '/services/consultancy-solutions' },
    { title: 'Market Insights', header: 'Market Insights', url: '/services/market-insights/' },
    { title: 'Recruitment', header: 'Recruitment', url: '/services/recruitment' }
  ]
</script>

<div class="cta-box">
  <h3 style="margin-bottom:10px;margin-top:0;">Services</h3>
  <ul>
    {#each services as s}
      <li>
        <a 
          href={s.url} 
          title={s.title} 
          style="width:100%;display:flex;justify-content:space-between;"
        >
          {s.title}<span>&rarr;</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  h3 {
    font-size:1.4em;
    color:#222;
  }
</style>