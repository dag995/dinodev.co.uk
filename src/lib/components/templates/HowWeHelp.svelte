
<script>
  const services = [
    { 
      title: 'Selling via interior designers and architects - your Launch Pad', 
      url: '/how-we-help/selling-via-interior-designers-and-architects-your-launch-pad' 
    }, {
      title: 'Launching your product into the interior design and architectural market',
      url: '/how-we-help/launching-your-product-into-the-interior-design-and-architectural-market'
    }, {
      title: 'Maintaining your product\'s visibility to interior designers and architects',
      url: '/how-we-help/maintaining-your-products-visibility-to-interior-designers-and-architects'
    }, {
      title: 'Your product\'s route to the interior design and architectural market',
      url: '/how-we-help/your-products-route-to-the-interior-design-and-architectural-market'
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