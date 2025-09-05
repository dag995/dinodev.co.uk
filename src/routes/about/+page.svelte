<svelte:head>
	<title>About • Daniel Groves</title>
</svelte:head>


<div class="container mx-auto">
  
  <h1>About Me</h1>
  <p>Known to some as Dan Dan the Website Man I work with businesses on everything digital.</p>
  <hr />
  <h2 class="mb-0">Developer Services</h2>
  <div class="row">
    <div class="col">
      <h3 class="mb-0">WordPress</h3>
      <p>With over ten years of WordPress experience. Building sites to spec in as close to WordPress core as possible to keep third-party reliance to a minimum.</p>
    </div>
    <div class="col">
      <h3 class="mb-0">Javascript (SvelteKit)</h3>
      <p>Since SvelteKit launched version 1 I have used it to develop middleware and full standalone, custom systems. For small businesses with specific custom needs SvelteKit is a fast and robust platform to build on.</p>
    </div>
    <div class="col">
      <h3 class="mb-0">WordPress React Blocks</h3>
      <p>WordPress Gutenberg now WordPress Blocks launched in 2018. One of the biggest changes WordPress has ever made.</p>
      <p>Blocks allows for perfect block editor integration for both user and outputted function.</p>
    </div>
    <div class="col">
      <h3 class="mb-0">PHP & Javscript</h3>
      <p>Regardless of framework I can create and develop for any PHP or Javsacript requirements.</p>
    </div>
  </div>

  <hr />
  <h2 class="mb-0">Design Services</h2>
  <div class="row">
    <div class="col">
      <h3>Web Design</h3>
    </div>
    <div class="col">
      <h3>Print Design</h3>
    </div>
    <div class="col">
      <h3>Photography</h3>
    </div>
  </div>
</div>

<style>
  .row {
    max-width:1240px;
    margin:0 auto;
    padding:0;
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap:2%;
  }
  .row .col {
    width:23%;
    flex-basis:23%;
    flex-grow:0;
    margin:10px 0;
    padding:0;
  }
  .mb-0 {
    margin-bottom:0;
  }
  @media (max-width: 781px) {
    .row .col {
      flex-basis: 48%;
    }
  }
  @media (max-width: 580px) {
    .row .col {
      flex-basis: 100%;
      gap:0;
    }
  }
</style>