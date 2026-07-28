<script>
  import { CTA, Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>Digital Strategy • Services • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    
    <div class="w-860">
      
      <div class="columns" style="padding:80px 20px 40px;">
        <div class="column-25">
          <div class="blob" style="background-color:#d6b777">
            <div>
              Digital<br />Strategy
            </div>
          </div>
        </div>
        <div class="column-75">
          <div style="padding:30px;">
            <h1>Actionable Insights</h1>
            <h2>Practical guidance on how to reach and engage creative specifiers</h2>
          </div>
        </div>
      </div>

    </div>

    <div class="w-720">  
      <h3>The UK Interior Design Bureau digital strategy gives you:-</h3>
      <ul>
        <li>An exit route from high-spend, short-term SEO and Ads</li>
        <li>Search engine optimisation that compounds from Day One.</li>
        <li>The architecture to build growth, reputation and leads.</li>
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
    border-radius:50% 0 50% 50%;
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