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
    </div>
    
    <div class="w-720">
      <h3>The UK Interior Design Bureau Digital Marketing gives you:-</h3>
      <ul>
        <li>A transition away from dependency on outbound, in-person sales to generate new business.</li>
        <li>Product visibility to creative specifiers at the point of searching and specifying.</li>
        <li>A scalable infrastructure generating valuable leads for customer service and sales to advance.</li>
      </ul>
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