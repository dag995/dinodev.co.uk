<script>
  const services = [
    { title: 'Industry Intelligence', header: 'Industry<br />Intelligence', color: '#5f4b4c', url: '/services/industry-intelligence' },
    { title: 'Actionable Insights', header: 'Actionable<br />Insights', color: '#59856e', url: '/services/actionable-insights/' },
    { title: 'Digital Strategy', header: 'Digital<br />Strategy', color: '#d6b777', url: '/services/digital-strategy/' },
    { title: 'Digital Marketing', header: 'Digital<br />Marketing', color: '#416691', url: '/services/digital-marketing' }
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