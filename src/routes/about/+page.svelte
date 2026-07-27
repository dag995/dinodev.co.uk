<script>
  import { base } from '$app/paths'

  let overlay = $state({ type: '', key: 0 })
  const team = {
    management: [ { 
        image: 'carol_rutter.jpg',
        title: 'Carol Rutter',
        position: 'Projects Director',
        description: `<p>Carol set up her own interior design business over twenty years ago after having worked as a designer for Barratt, the housebuilder.</p>
        <p>After several years of running an interior design practice Carol experienced first-hand the pitfalls of trying to specify product. It became very clear that although technical expertise existed within suppliers' businesses it wasn't being readily shared with its interior design customers.</p>
        <p>This growing frustration is what brought Carol to set up, with Daniel, TIDB (The UK Interior Design Bureau) to help those with a product or service successfully engage with creative specifiers.</p>
        <p>Carol has a background in English Literature, an obsession with Victorian authors and keeps sixteen pet sheep. (Names provided on request).</p>`
      }, {
        image: 'daniel_groves.jpg',
        title: 'Daniel Groves',
        position: 'Creative Director',
        description: `<p>Daniel is a business-minded full-stack developer with over ten years' experience helping companies in visual presentation, technical problem solving and digital strategy.</p>
          <p>Having an ethos for producing the correct result, Daniels skill-set complemented Carol's objectives to deliver vast amounts of detail in the fastest, most coherent way. This led to TIDB (The UK Interior Design Bureau) being set up by Daniel and Carol in the understanding that being fit-for-purpose was more effective than decorative digital design when marketing to creative specifiers.</p>
          <p>Daniel is a keen art and film enthusiast, immersing himself in all forms of art and media in his personal and professional life.</p>`
      } ],
    team: [{
      image: 'robin_fisher.jpg',
      title: 'Robin Fisher',
      position: 'Architectural Critic, Lille, France',
      description: '<p>After studying both literature and landscape architecture I worked for over thirty years in the field of PR & communication. Because of my background I worked particularly on environmental issues such as waste reduction but also for the wood industry. As a PR consultant for the American Hardwood Export Council I had the unique opportunity to combine my interest for design with the promotion of a very sustainable material. I was able to write up lots of case studies on architectural projects across Europe, meet some leading architects and designers as well as organising a student design competition. Today I have the good fortune through this blog, to write about some fascinating design projects which draw from the constant technical innovations in steel and metal structures.</p>'
    }, {
      image: 'antonio_moll.jpg',
      title: 'Antonio Moll',
      position: 'Principal Architect for Moll Architects',
      description: '<p>Antonio studied architecture in Valencia and obtained his masters degree “Housing Laboratory of the 21st century” in Barcelona. Based in London, his firm operates in the fields of architecture, urbanism and design. Antonio combines the professional practice with his activity as a writer and academic, has been a guest lecturer at universities in Spain such as Zaragoza and Barcelona and a guest critic at the Architectural Association in London. Antonio is passionate about sports. Former basketball player, regular at the ski slopes in winter, he’s now testing the waters in triathlon competitions during the warmer months.</p>'
    }, {
      image: 'naomi_evans.jpg',
      title: 'Naomi Evans',
      position: 'Architect and Project Leader, Genton, Melbourne, Australia',
      description: `<p>Naomi Evans is Project Leader in architecture for Genton in Melbourne, Australia, In my 10+ years of practicing in the architecture profession I have gained valuable experience with some highly reputable studios including Cox Architecture in Melbourne and Feilden Clegg Bradley Studios in London. I have been privileged to work on a variety of high- profile and community-based projects, and have gained excellent experience in the design of public buildings and spaces. In October 2010, I relocated to Adelaide to form part of the seminal Cox Adelaide Studio. I was a member of the architectural team for the Adelaide Oval Redevelopment and specialised on the building’s facades from Concept Design through to Documentation. I have since been a member of the design teams for the ABC Southbank Studios Refurbishment, various works for the Sydney Cricket & Sports Ground Trust, and the new Victorian Cricket and Community Centre.</p>
      <p>My role has required me to support the design process in its breadth of phases including master planning and spatial planning.</p>`
    }, {
      image: 'lolca_adeokun.jpg',
      title: 'Lola Adeokun',
      position: 'Architect and Researcher with Colman Architects',
      description: `<p>Dr Cynthia Adeokun is a registered architect based in the United Kingdom, with many years of professional and academic experience in the construction industry in the United Kingdom, Kenya and Nigeria. She obtained her doctorate degree in Architecture at the University College, London, United Kingdom in 2007 whilst also pursuing a full-time professional career.</p>
        <p>After many years of working in the private sector in London on sports and retail architectural projects, she took up an academic position as a senior lecturer at Covenant University, Ota, Nigeria, where she taught at undergraduate and post-graduate levels for over three years. Her research interests include housing needs, domestic space morphology and lifestyles in African towns and cities.</p>
        <p>She has published several peer-reviewed conference and journal papers on housing, domestic space morphology and architectural education, and has also served as a member of scientific review committees at international built environment academic conferences and was recently appointed as an external examiner at the School of Construction Management, University of Wittswatersrand, South Africa.</p>`
    }, {
      image: 'jecks_stone.jpg',
      title: 'Jecks Stone',
      position: 'Interior Designer & Founder of Persona Abode Interiors',
      description: `<p>Jecks Stone founded Persona Abode Interiors to specialise in designing eco-conscious homes. With over a decade of experience in Listed Building conservation, her focus is creating space for wellness through functional environments to feed client’s health and happiness.</p>
        <p>Believing that Interior Design as a collective should be held accountable for its participation of unethical practices, Jecks pursued studies in vegan design and in 2017 became a “certified cruelty free” designer with international organisation Vegandesign.org. As one of the first UK designers to do so, Jecks is a contributing writer exploring the topics that arise from designing without animals.</p>
        <p>Jecks is very enthusiastic about making design more accessible as everyone should be able to navigate through spaces without losing their dignity. Persona Abode likes to collaborate with independent brands with strong ethical stances as well as those who care about the pools of communities that are affected by hardship.</p>`
    }, {
      image: 'molly_anderson.jpg',
      title: 'Molly Anderson',
      position: 'Interior designer, Vancouver, Canada',
      description: `<p>Molly was originally a farm girl from Yorkshire until she moved to the Big Smoke (aka London) to start her design career. After four years of living and working in the capital the pull of adventure and the great outdoors resulted in her emigrating to Vancouver, Canada. Three years on and she is still just as much an indoor as an outdoor enthusiast, which is why Vancouver is the perfect setting for her. The fact that you can be at an art gallery one evening and then night-skiing the next, is something that she still finds wonderfully mind boggling.</p>
        <p>Molly is particularly interested in the psychology of design and how it can impact the human mind. She continually strives to embed the most recent design and psychology learnings into her projects in order to benefit the future user of her designs.</p>
        <p>When she is not designing interiors, you can find her decorating cakes or taking wild swims in the crystal blue lakes for which Canada is famous.</p>`
    }, {
      image: 'federico_de_paoli.jpg',
      title: 'Federico de Paoli',
      position: 'Architect and Associate Partner',
      description: `<p>Federico de Paoli is an experienced architect and planner and is Associate Partner for an international firm of architects. He graduated from Università degli Studi di Genova and is currently supervising the build of Kuwait International Airport. Federico has a strong arts and design focus and his specialities are design, design management, taking concept design to site and supervising construction.</p>`
    }, {
      image: 'gracia_ramirez.jpg',
      title: 'Gracia Ramírez',
      position: 'Academic and Art Critic based in London',
      description: `<p>Gracia Ramírez is an academic and art critic based in the UK where she lectures at University of the Arts London. She is interested in a variety of media and art practices and her research spans widely, from the history of experimental and independent cinema to art and media in urban spaces. She also publishes writings on artists and exhibitions reviews.</p>`
    }]
  }
</script>

<svelte:head>
	<title>About • TIDB</title>
</svelte:head>

<div class="tidb-wrap">
  <div class="tidb-container">
    <div class="w-860" style="padding-top:80px;padding-right:20px;padding-left:20px;padding-bottom:40px;border-bottom:solid 1px #CCC;">
      <h1>About The UK Interior Design Bureau</h1>
      <p>The UK Interior Design Bureau was set up in 2013 by Daniel Groves and Carol Rutter. Their objective was to provide dedicated digital marketing services for manufacturers wishing to develop a route to market via creative specifiers.</p>
      <p>Carol and Dan's combination of skills, brought from an interior design and digital marketing background, means that the work TIDB produces consistently engages the target audience of interior designers and architects where conventional marketing fails to attract.</p>
    </div>

    <div class="w-860" style="padding-right:20px;padding-left:20px;padding-top:40px;">
      <h2>TIDB Team</h2>
    </div>

    <div class="columns" style="justify-content:center;">
      {#each team.management as m, mk}
        <div class="column-33">
          <div>
            <a 
              href="/" 
              onclick={e => {
                e.preventDefault()
                overlay = { type: 'management', key: mk }
              }}
              title={m.title}
            >
              <img src={`/images/${m.image}`} alt={m.title} title={m.title} />
            </a>
            <h3>
              <a 
                href="/" 
                onclick={e => {
                  e.preventDefault()
                  overlay = { type: 'management', key: mk }
                }}
                title={m.title}
              >{m.title}</a>
            </h3>
            <h4>
              <a 
                href="/" 
                onclick={e => {
                  e.preventDefault()
                  overlay = { type: 'management', key: mk }
                }}
                title={m.title}
              >{m.position}</a>
            </h4>
          </div>
        </div>
      {/each}
    </div>

    <div class="w-860" style="padding-right:20px;padding-left:20px;padding-top:40px;">
      <h2>TIDB Writers Team</h2>
      <p>We are made up of a team of interior designers and architects with a sprinkling of English graduates.</p>
    </div>

    <div class="columns">
      {#each team.team as m, mk}
        <div class="column-25">
          <div>
            <a 
              href="/" 
              onclick={e => {
                e.preventDefault()
                overlay = { type: 'team', key: mk }
              }}
              title={m.title}
            >
              <img src={`/images/${m.image}`} alt={m.title} title={m.title} />
            </a>
            <h3>
              <a 
                href="/" 
                onclick={e => {
                  e.preventDefault()
                  overlay = { type: 'team', key: mk }
                }}
                title={m.title}
              >{m.title}</a>
            </h3>
            <h4>
              <a 
                href="/" 
                onclick={e => {
                  e.preventDefault()
                  overlay = { type: 'team', key: mk }
                }}
                title={m.title}
              >{m.position}</a>
            </h4>
          </div>
        </div>
      {/each}
    </div>

  </div>
</div>

{#if overlay.type}
  <div class="overlay">
    <div class="wrapper">
      <a 
        href="/" 
        title="close" 
        class="close"
        onclick={e => {
          e.preventDefault()
          overlay = { type: '', key: 0 }
        }}
      >&times;</a>

      <div class="columns">
        <div class="column-50">
          <img 
            src={`/images/${team[overlay.type][overlay.key].image}`} 
            alt={team[overlay.type][overlay.key].title} 
            title={team[overlay.type][overlay.key].title} 
          />
        </div>
        <div class="column-50" style="padding:30px; justify-content: center; display: flex; flex-direction: column;">
          <h2>{team[overlay.type][overlay.key].title}</h2>
          <h3>{team[overlay.type][overlay.key].position}</h3>
          {@html team[overlay.type][overlay.key].description}
        </div>
      </div>
    
    </div>
  </div>
{/if}

<style>
  .columns {
    display: flex;
    flex-wrap: wrap;
    gap:0;
    width:100%;
    box-sizing: border-box;
  }
  .column-25,
  .column-33 {
    flex-grow:0!important;
  }
  .column-25 div,
  .column-33 div {
    background: #FFF;
    padding: 20px;
    margin:0 5px;
    border: solid 1px #e6e7e8;
  }
  .column-25 h3,
  .column-33 h3 {
    font-size:1.4em;
    margin:0;
    padding:20px 0 0;
  }
  .column-25 h4,
  .column-33 h4 {
    font-size:1.2em;
    line-height:normal;
    margin:0;
    padding:10px 0 0;
    color:#333;
  }
  .overlay {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1000;
    overflow:hidden;
    background:rgba(0,0,0,0.76);
    padding:20px;
  }
  .overlay .wrapper {
    width:100%;
    max-width:920px;
    margin:0 auto;
    overflow-y:scroll;
    background-color:#FFF;
    border-radius:8px;
    position:relative;
  }
  .overlay .close {
    position:absolute;
    top:20px;
    right:20px;
    font-size:2em;
    line-height:25px;
    border:0;
    font-weight: normal;
    padding:10px 16px;
    border-radius:50%;
    color:#666;
  }
  .overlay .close:hover {
    color: #000;
  }
  .overlay h2,
  .overlay h3 {
    font-size:2em;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin:0;
    padding:20px 0 0;
    font-weight:normal;
    line-height: normal;
  }
  .overlay h3 {
    font-size:1.2em;
  }
</style>