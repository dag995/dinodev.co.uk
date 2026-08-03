<script>
  import { base } from '$app/paths'
  import { onMount, onDestroy } from 'svelte'

  const scrollNavBar = 110
	let lastScroll = 0
	let show = $state(false)
	let hoverMenu = $state('')
	let headerBg = $state(false)
	let mobile = $state(false)

	onMount(() => {
		window.onscroll = () => {
			const current = window.scrollY
			show = current < scrollNavBar || current < lastScroll ? false : true			
			if( ( current + 10 ) < lastScroll ) {
				headerBg = false
				hoverMenu = ''
			}
			if( (current + 10) > lastScroll ) hoverMenu = ''
			lastScroll = current
		}
	})
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<header 
  onmouseenter={() => { headerBg = true }}
  onmouseleave={() => { }}
  class={headerBg || hoverMenu ? 'bgFFF main-header' : 'main-header'}
  class:scrolled={show}
>
  <div class="wrapper">
    <div class="inner-wrapper">
      
      <div class="logo-wrap">
        <a href="/">
          <img src={`${base}/tidb_logo.svg`} alt="TIDB" title="TIDB" />
        </a>
        <p class="tagline">Facilitating Product Visibility &amp; <br>Selection</p>
      </div>

      <nav>
        <ul class="nav">
          <li><a href="/about" title="About">About</a></li>
          <li><a href="/testimonials" title="Testimonials">Testimonials</a></li>
          <li><a href="/getting-specified" title="Getting Specified">Getting Specified</a></li>
          <li><a href="/services" title="Services">Services</a></li>
          <li><a href="/faq" title="FAQ">FAQ</a></li>
          <li><a href="/contact" title="Contact">Contact</a></li>
        </ul>
      </nav>

    </div>
  </div>
</header>

<style type="text/css">
  header {
    width: 100%;
    z-index: 500;
    position: relative;
    position: fixed;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out, top 0.6s ease-in-out;
    background: rgba(255, 255, 255, 0.86);
    -webkit-box-shadow: 0px 2px 5px 0px rgb(209 211 212);
    -moz-box-shadow: 0 2px 5px 0 rgba(209,211,212,1);
    box-shadow: 0px 2px 5px 0px rgb(209 211 212);
  }
  header.bgFFF {
    background:#FFF;
  }
  header.scrolled {
    transition:background-color 0.3s ease-in-out, top 0.6s ease-in-out;
    top:-150px;
  }
  header .wrapper {
    padding:10px 15px;
  }
  header .inner-wrapper {
    margin:0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tagline {
    margin: 0;
    font-size: 18px;
    font-weight: 200;
    color: #6d6e71;
    line-height: 22px;
  }
  header .logo-wrap img {
    display: block;
    width:80px;
    height:80px;
    margin-right:20px;
  }
  header ul {
    list-style: none;
    padding: 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:1rem;
    margin:0;
  }
  header ul li {
    position:relative;
    align-items:center;
    display:flex;
    color:#333;
  }
  header ul li {
    color:#333;
    font-size:1em;
  }
  header ul li a {
    color:#333;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  header ul li a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    header ul {
      flex-wrap: nowrap;
    }
  }
  @media (max-width: 720px) {
    header .wrapper {
      padding:10px;
    }
    header .wrapper .inner-wrapper {
      flex-wrap:wrap;
      justify-content: center;
    }
    header .tagline {
      font-size:14px;
      font-weight:400;
    }
    header .logo-wrap img {
      margin-right:10px;
    }
    header ul {
      margin-top:10px;
      flex-wrap: nowrap;
    }
  }
</style>