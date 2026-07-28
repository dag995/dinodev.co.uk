<script>
  import { CTA, Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>Actionable Insights • Services • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    
    <div class="w-860">
      
      <div class="columns" style="padding:80px 20px 40px;">
        <div class="column-25">
          <div class="blob" style="background-color:#416691">
            <div>
              Digital<br />Marketing
            </div>
          </div>
        </div>
        <div class="column-75">
          <div style="padding:30px;">
            <h1>Digital Marketing</h1>
            <h2>Building an online resource connecting creative specifiers with your products</h2>
          </div>
        </div>
      </div>
      
      <h3>The UK Interior Design Bureau Digital Marketing gives you:-</h3>
      <div class="columns">
        <div class="column-33" style="padding:0 20px 0 0;">
          <p>A transition away from dependency on outbound, in-person sales to generate new business.</p>
        </div>
        <div class="column-33" style="padding:0 10px;">
          <p>Product visibility to creative specifiers at the point of searching and specifying.</p>
        </div>
        <div class="column-33" style="padding:0 0 0 20px;">
          <p>A scalable infrastructure generating valuable leads for customer service and sales to advance.</p>
        </div>
      </div>
          
    </div>

    <div style="max-width:720px;margin:0 auto;">
      <h2 style="font-size:1.8em;">Attracting interior designers and architects to your product and service</h2>
      <h3 style="font-size:1.4em;margin-top:10px;margin-bottom:30px;">This service is for product manufacturers, suppliers and fabricators.</h3>

      <p>With creative specifiers, like other target markets, your website is your most important sales tool. Your product needs to be visible and accessible online and, despite the plethora of other suppliers' websites, it is entirely possible for your product to stand out.</p>
      <p>When a creative specifier is searching for a related product, your product is made visible online even if the prospective customer is not yet specifically aware of it. Then the product and its properties, alongside your service, are presented, in crystal clarity to enable a rapid assessment of suitability.</p>
      <p>TIDB creates and develops websites which provide valuable specifying resources for interior designers and architects and generate specification sales.</p>

    </div>

    <CTA />
    
    <Services />

  </div>
</div>

<style>
  h1 {
    margin-bottom:0;
    padding-bottom:10px;
  }
  h2 {
    margin-bottom:0;
    padding-bottom:10px;
    font-size:1.4em;
  }
  h3 {
    color:#575757;
    font-size:1.8em;
    margin:0;
  }
  h3 {
    font-size:1.6em;
    margin-bottom:10px;
  }
  .blob {
    color:#FFF;
    border-radius:50% 50% 0 50%;
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
    width:calc(100% + 10px);
    max-width:300px;
    margin:0 auto;
  }
  .blob div {
    font-size:1.6em;
    display:flex;
    height:100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
</style>