<script>
  import { base } from '$app/paths'
  const faqs = [
    { 
      title: 'Are there any services you do not provide?', 
      description: `<p>We will set up your email for you but your ongoing email management is better provided by a dedicated third party.</p>`
    }, {
      title: 'Do we have to be a manufacturer or supplier ourselves?', 
      description: `<p>Not necessarily, some of our clients have included Embassies and Trade Councils who are under pressure from their country's manufacturers to help them sell to UK interior designers.</p>`
    }, {
      title: 'Does it have to be a new product? Can you work with our existing product range?',
      description: `<p>Yes, we will work with your existing product range, although it is likely that we will make suggestions for new products or developments of your existing ones.</p>`
    }, {
      title: 'Does TIDB work with international markets as well as the UK?',
      description: `<p>Yes. We are based in the UK however we engage with interior designers and architects around the world. If our clients wish us to target certain countries then we can do this too.</p>`
    }, {
      title: 'We already have some interior design customers but can\'t seem to be attract more. Don\'t interior designers all want the same things?',
      description: `<p>The short answer is no. Here's why.</p>
        <p>It is true that there are common core requirements for every interior design business in the process of sourcing, selection and specification however all interior design businesses are not the same. There are, broadly speaking, five key types of interior design business, each with a different fee and profit-earning structure and naturally with ensuing different and distinct priorities regarding specification, procurement and delivery.</p>
        <p>We ensure that the relevant messages are designed into our content that will attract and engage people working within each of these business models.</p>`
    }, {
      title: 'What about other, non-architectural markets?',
      description: `<p>All of our clients have other customers they need to consider as well Creative Specifiers.</p>
        <p>We always tailor the “destination” on your website for every one of your customer types. This way they always feel welcomed and that they have arrived in the right place for their needs. And because of the high level of aesthetic and product detail presenting to the architectural market is not a disadvantage to any other market. In short, your other customers are well provided for.</p>
        <p>Other markets typically incorporated into our work:-</p>
        <ul>
          <li>Hoteliers</li>
          <li>House builders and developers</li>
          <li>Construction companies, project managers, contractors</li>
          <li>Healthcare sector</li>
          <li>Police and prisons</li>
          <li>Education and schools</li>
          <li>Defence</li>
          <li>Local government</li>
          <li>Embassies</li>
          <li>Heritage, historic, conservation</li>
          <li>Yacht building, marine</li>
        </ul>`
    }, {
      title: 'What about the hosting of the websites?',
      description: `<p>We provide managed web hosting and support. We ensure that the website is maintained, secure and compliant in all aspects, giving your peace of mind of mind, not having to worry about any technical aspect of your marketing.</p>`
    }, {
      title: 'What is a Creative Specifier?',
      description: `<p>Creative specifier is an umbrella name for a professional person who specifies finishes, materials and products for buildings or home use. A creative specifier may be an architect or interior designer working in an interior design or architectural practice, or fusion of both, or may work in a retail or hotel group.</p><p>Alternatively a creative specifier may work in Research and Development within a manufacturing company that makes products such as home appliances, fixtures or furniture.</p>`
    }, {
      title: 'What is SEO?',
      description: `<p>SEO stands for Search Engine Optimisation. SEO is the process of generating traffic from organic sources, i.e non paid-for sources.</p>
        <p>It is sometimes called Organic audience creation and development.</p>
        <p>SEO involves a variety of methods used to increase visitors to your website and achieve a high rank in Google's search results.</p>
        <p>SEO is used to make a website accessible to a search engine and increases the chances that the website will be found by a search engine.</p>`
    }, {
      title: 'Director level, equivalent or above, so strategic people, leading and decision-making.',
      description: `<p>Director level, equivalent or above, so strategic people, leading and decision-making.</p>`
    }, {
      title: 'Will the marketing be just to architects and interior designers?',
      description: `<p>No, we incorporate other markets, the only market we do not include is retail.</p>`
    }
  ]
  let open = $state([])
</script>

<svelte:head>
	<title>FAQ • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    <div class="w-860" style="padding-top:80px;padding-right:20px;padding-left:20px;padding-bottom:0;">
      <h1>Frequently Asked Questions?</h1>
    </div>

    <div class="w-860" style="padding-right:20px;padding-left:20px;">
      <div class="faq">
        {#each faqs as faq, fk}
          <details class={open.includes(fk) ? 'open' : ''} open={open.includes(fk)}>
            <summary
              onclick={e => {
                e.preventDefault()
                open = open.includes(fk) ? open.filter(o => o !== fk) : [...open, fk]
              }}
            >{faq.title}</summary>
            {@html faq.description}
          </details>
        {/each}
      </div>
    </div>

  </div>
</div>

<style>
  details {
    background-color: #FFF;
    padding:20px;
  }
  details + details {
    margin-top:20px;
  }
  summary {
    position: relative;
    padding-right: 22px;
    font-size:1em;
  }
  summary::marker {
    content: ' ';
  }
  summary::after {
    content: ' ';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSI+PHBhdGggZD0iTTEuNTAwMDIgNEw2LjAwMDAyIDhMMTAuNSA0IiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+);
    width: 12px;
    height: 12px;
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  details.open summary {
    border-bottom:solid 1px #CCC;
    padding-bottom:20px;
  }
  details.open :last-child {
    margin-bottom:0;
  }
</style>