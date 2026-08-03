
<script>
  const services = [
    { 
      title: 'Selling via interior designers and architects - your launch pad', 
      url: '/getting-specified/selling-via-interior-designers-and-architects-your-launch-pad' 
    }, {
      title: 'Launching your product into the interior design and architectural market',
      url: '/getting-specified/launching-your-product-into-the-interior-design-and-architectural-market'
    }, {
      title: 'Keeping your product visible to interior designers and architects',
      url: '/getting-specified/keeping-your-product-visible'
    }, {
      title: 'Building a product range for creative specifiers',
      url: '/getting-specified/building-a-product-range-that-can-be-specified'
    }
  ]
</script>

<div class="cta-box">
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