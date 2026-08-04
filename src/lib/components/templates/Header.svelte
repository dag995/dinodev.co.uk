<script>
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
  class='main-header'
  class:scrolled={show}
>
  <div class="wrapper">
    <div class="inner-wrapper">
      
      <div class="logo-wrap">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96 23" style="enable-background:new 0 0 96 23;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:#FFB757;}
              .st1{fill:#E4D8BF;}
            </style>
            <g>
              <path class="st0" d="M17.5,19.7c4.4-4.2,7.7-13.5,3.6-17.8l0,0c0,0-0.1-0.1-0.1-0.1l0,0c-4.3-4.1-14-0.7-18,3.9
                C-6.4,15.3,8.3,29.5,17.5,19.7z"/>
            </g>
            <g>
              <path class="st1" d="M32,3.7h2.6v14.2h4.3v2.4H32V3.7z"/>
              <path class="st1" d="M42.5,3.7h3.8c1.3,0,2.3,0.3,2.9,0.9c0.6,0.6,0.9,1.6,0.9,2.9v1c0,1.7-0.6,2.8-1.7,3.3v0
                c0.6,0.2,1.1,0.6,1.3,1.2c0.3,0.6,0.4,1.4,0.4,2.3v2.9c0,0.5,0,0.9,0,1.1c0,0.3,0.1,0.6,0.2,0.9h-2.6c-0.1-0.3-0.2-0.5-0.2-0.8
                c0-0.2,0-0.7,0-1.3v-3c0-0.8-0.1-1.3-0.4-1.6c-0.2-0.3-0.7-0.4-1.3-0.4h-0.9v7.1h-2.6V3.7z M46,10.8c0.5,0,0.9-0.1,1.2-0.4
                c0.3-0.3,0.4-0.7,0.4-1.3V7.8c0-0.6-0.1-1-0.3-1.3c-0.2-0.3-0.5-0.4-1-0.4h-1.2v4.7H46z"/>
              <path class="st1" d="M55.1,19.4c-0.7-0.7-1-1.7-1-3.1V7.7c0-1.3,0.3-2.4,1-3.1c0.7-0.7,1.6-1.1,2.9-1.1s2.2,0.4,2.9,1.1
                c0.7,0.7,1,1.7,1,3.1v1.4h-2.5V7.5c0-1.1-0.4-1.6-1.3-1.6c-0.9,0-1.3,0.5-1.3,1.6v9c0,1.1,0.4,1.6,1.3,1.6c0.9,0,1.3-0.5,1.3-1.6
                v-3.2h-1.3v-2.4h3.8v5.4c0,1.3-0.3,2.4-1,3.1c-0.7,0.7-1.6,1.1-2.9,1.1S55.8,20.1,55.1,19.4z"/>
              <path class="st0" d="M65.9,3.7H73v2.4h-4.5v4.4h3.6v2.4h-3.6v5.1H73v2.4h-7.1V3.7z"/>
              <path class="st0" d="M77.7,19.4c-0.7-0.7-1-1.7-1-3.1V7.7c0-1.3,0.3-2.4,1-3.1c0.7-0.7,1.6-1.1,2.9-1.1c1.3,0,2.2,0.4,2.9,1.1
                c0.7,0.7,1,1.7,1,3.1v1.4H82V7.5c0-1.1-0.4-1.6-1.3-1.6s-1.3,0.5-1.3,1.6v9c0,1.1,0.4,1.6,1.3,1.6s1.3-0.5,1.3-1.6v-3.2h-1.3v-2.4
                h3.8v5.4c0,1.3-0.3,2.4-1,3.1c-0.7,0.7-1.6,1.1-2.9,1.1C79.3,20.5,78.3,20.1,77.7,19.4z"/>
              <path class="st0" d="M89.2,19.4c-0.7-0.7-1-1.7-1-3.1V7.7c0-1.3,0.3-2.4,1-3.1c0.7-0.7,1.6-1.1,2.9-1.1s2.2,0.4,2.9,1.1
                c0.7,0.7,1,1.7,1,3.1v1.4h-2.5V7.5c0-1.1-0.4-1.6-1.3-1.6c-0.9,0-1.3,0.5-1.3,1.6v9c0,1.1,0.4,1.6,1.3,1.6c0.9,0,1.3-0.5,1.3-1.6
                v-3.2h-1.3v-2.4H96v5.4c0,1.3-0.3,2.4-1,3.1c-0.7,0.7-1.6,1.1-2.9,1.1S89.9,20.1,89.2,19.4z"/>
            </g>
          </svg>
        </a>
      </div>

      <nav>
        <ul class="nav">
          <li><a href="/about" title="About">About</a></li>
          <!-- <li><a href="/testimonials" title="Testimonials">Testimonials</a></li> -->
          <!-- <li><a href="/getting-specified" title="Getting Specified">Getting Specified</a></li> -->
          <!-- <li><a href="/services" title="Services">Services</a></li> -->
          <!-- <li><a href="/faq" title="FAQ">FAQ</a></li> -->
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
    background: var(--theme-color);
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
    margin:0;
  }
  header .logo-wrap svg {
    display: block;
    width:96px;
    height:23px;
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
    color:#FFF;
  }
  header ul li {
    color:#FFF;
    font-size:1em;
  }
  header ul li a {
    color:#FFF;
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