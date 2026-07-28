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
          <div class="blob" style="background-color:#59856e">
            <div>
              Actionable<br />Insights
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
      <h3>The UK Interior Design Bureau Actionable Insight gives you:-</h3>
      <ul>
        <li>An end to wasteful sales activities which have limited reach.</li>
        <li>A roadmap designed around your own product, positioning and budget.</li>
        <li>Clarity and direction on channelling resources to achieve growth and the highest return on investment.</li>
      </ul>
    </div>

    <div class="intro">
      <h1 >Actionable Insights</h1>
      <h2>Knowledge Transfer</h2>
      <p>Four Modules as a foundation for effective marketing to Creative Specifiers (interior designers, architects and product specifiers)</p>
    </div>

    <div class="w-860">
      <h3 style="text-align:center;">The Modules are created for:-</h3>
      
      <div class="columns">
        <div class="column-33" style="padding:0 20px 0 0;">
          <p><strong>Business-owners</strong> - who are managing their own marketing and wish to target interior designer and architect customers to achieve repeat business</p>
        </div>
        <div class="column-33" style="padding:0 10px;">
          <p><strong>Marketers</strong> - wishing to increase their understanding of this market sector in order to communicate more effectively</p>
        </div>
        <div class="column-33" style="padding:0 0 0 20px;">
          <p><strong>Product-managers</strong> - expanding into the Creative Specifier market possibly for the first time</p>
        </div>
      </div>

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
    border-radius:50% 50% 50% 0;
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
  .intro {
    padding:80px 20px 40px;
    max-width:360px;
    margin:0 auto;
  }
  .intro h1 {
    margin-bottom:0;
    padding-bottom:10px;
    text-align: center;
  }
  .intro h2 {
    color:#575757;
    font-size:1.8em;
    margin:0;
    text-align: center;
  }
</style>