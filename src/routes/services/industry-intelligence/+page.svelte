<script>
  import { CTA, Services } from '$lib/components/templates'
</script>

<svelte:head>
	<title>industry Intelligence • Services • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    
    <div class="w-860">
      
      <div class="columns" style="padding:80px 20px 40px;">
        <div class="column-25">
          <div class="blob" style="background-color:#5f4b4c">
            <div>
              Industry<br />Intelligence
            </div>
          </div>
        </div>
        <div class="column-75">
          <div style="padding:30px;">
            <h1>Industry Intelligence</h1>
            <h2>Insider knowledge of how architects and interior designers source, evaluate and select products.</h2>
          </div>
        </div>
      </div>
    </div>
      
    <div class="w-720">
      <h3>The UK Interior Design Bureau gives you an insider view of:-</h3>
      <ul>
        <li>The product attributes that are crucial for creative specifiers, enabling focus on communications which drive specification decisions</li>
        <li>The essential services needed from a manufacturer, so you can remove every barrier to being specified.</li>
        <li>The specification lifecycle and its influencers, so you can protect your specification against value-engineering.</li>
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
    border-radius:0 50% 50% 50%;
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