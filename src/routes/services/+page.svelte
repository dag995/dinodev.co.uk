<script>
  import { Services } from '$lib/components/templates'
  
  const services = [
    { title: 'Industry Intelligence', header: 'Industry<br />Intelligence', color: '#5f4b4c', url: '/services/industry-intelligence' },
    { title: 'Actionable Insights', header: 'Actionable<br />Insights', color: '#59856e', url: '/services/actionable-insights/' },
    { title: 'Digital Strategy', header: 'Digital<br />Strategy', color: '#d6b777', url: '/services/digital-strategy/' },
    { title: 'Digital Marketing', header: 'Digital<br />Marketing', color: '#416691', url: '/services/digital-marketing' }
  ]
</script>

<svelte:head>
	<title>Services • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    
    <div class="intro">
      <h1 >The UK Interior Design Bureau</h1>
      <h2>Services Offered</h2>
      <p>We offer services ranging from advisory and consultancy through to full digital media marketing provision and supporting business services. Our core focus is the creative specifier audience (interior designer, architect, professional specifiers) however we encompass all market audiences our client wishes to target with the exception of consumer/retail.</p>
    </div>

    <div class="w-860">
      <h3>Our services are designed for:-</h3>
      <div class="columns">
        <div class="column-33">
          <p><strong>Manufacturers</strong> - Wishing to win attention from creative specifiers for their products</p>
        </div>
        <div class="column-33">
          <p><strong>Suppliers</strong> - Needing to increase sales via interior designers and architects</p>
        </div>
        <div class="column-33">
          <p><strong>Fabricators</strong> - Wishing to create more working relationships with architects and designers</p>
        </div>
      </div>
    </div>

    <div class="blobs">
      {#each services as s}
        <div style={`background-color:${s.color}`}>
          <div>
            <a href={s.url} title={s.title}>{@html s.header}</a>
          </div>
        </div>
      {/each}
    </div>
    <div style="max-width:660px;padding:60px 20px 10px;margin:0 auto;">
      <p>The UK Interior Design Bureau's services are based on first-hand industry knowledge as interior designers.</p>
      <p>Because we understand how creative specifiers source, evaluate and specify products we are able to help manufacturers become more visible and compelling to architects and interior designers, driving enquiries and specifications</p>
    </div>

    <Services />

  </div>
</div>

<style>
  .intro {
    padding:80px 20px 40px;
    max-width:560px;
    margin:0 auto;
  }
  .intro h1 {
    margin-bottom:0;
    padding-bottom:10px;
    text-align: center;
  }
  .intro h2,
  h3 {
    color:#575757;
    font-size:1.8em;
    margin:0;
    text-align: center;
  }
  h3 {
    font-size:1.6em;
    margin-bottom:10px;
  }
  .blobs {
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 0;
    max-width:860px;
    margin:30px auto 0;
    overflow:hidden;
    padding:0 20px;
    
  }
  .blobs div {
    color:#FFF;
    border-radius:50% 50% 50% 0;
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
    width:calc(100% + 10px);
    margin-left:-5px;
    margin-right:-5px;
  }
  .blobs div a {
    color:#FFF;
  }
  .blobs div + div + div {
    border-radius:50% 0 50% 50%;
  }
  .blobs div:first-child {
    border-radius:0 50% 50% 50%;
  }
  .blobs div:last-child {
    border-radius:50% 50% 0 50%;
  }
  .blobs div div {
    font-size:1.4em;
    display:flex;
    height:100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  @media (max-width: 600px) {
    .blobs {
      display: grid;
      grid-template-columns: auto auto;
    }
    .blobs div div {
      font-size:1.2em;
    }
  }
</style>