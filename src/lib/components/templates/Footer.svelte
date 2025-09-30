<script>
  import { base } from '$app/paths'
  import { page } from '$app/stores'
</script>

<footer class="main-footer">

  <div class="wrap">

    <div class="col">
      <a href="/" class="logo" aria-label="home">
        <img src={`${base}/tidb_logo.svg`} alt="TIDB" title="TIDB" />
      </a>
    </div>
    
    <div class="col">
      <p class="tagline">Facilitating Product Visibility & Selection</p>
    </div>

    <div class="col">
      <h5>Get in touch</h5>
      <ul>
        <li><a href="tel:+4401174038840" class="">+44 (0) 117 403 8840 (Carol)</a></li>
        <li><a href="tel:+4401174038844" class="">+44 (0) 117 403 8844 (Dan)</a></li>
        <li><a href="mailto:contact@tidb.co.uk" class="">contact@tidb.co.uk</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Location</h5>
      <p>
        Flat 14, Bridge Quay
        <br />138-141 Redcliff Street
        <br />Bristol
        <br />BS1 6PQ
      </p>
    </div>

    <div class="col">
      <h5>Location</h5>
      <p>
        108 Brent St
        <br />Brent Knoll
        <br />Highbridge
        <br />TA9 4BB
      </p>
    </div>

  </div>

  <div class="legal">
    <p>
      &copy;  {new Date().getFullYear()} The UK Interior Design Bureau Ltd registered in England and Wales.
      <br />
      Company No. 07172422 • VAT No. 994-7332-72
      <br />
      Registered office: Flat 14, Bridge Quay, 138-141 Redcliff Street, Bristol, BS1 6QP, UK
    </p>
  </div>

</footer>

<style type="text/css">
  footer {
    overflow: hidden;
    margin-top:0;
    display:block;
    font-size:0.9em;
  }
  footer .wrap {
    max-width:1240px;
    margin:0 auto;
    padding:30px 20px;
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap:1%;
  }
  footer .wrap .col:first-child {
    width:10%;
    flex-basis:10%;
  }
  footer .wrap .col {
    width:21.5%;
    flex-basis:21.5%;
    flex-grow:0;
    margin:20px 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }
  footer .tagline {
    margin:0;
    font-size: 18px;
    font-weight: 200;
    color: #6d6e71;
    line-height: 22px;
  }

  footer img {
    width:160px;
    height:160px;
  }
  footer a {
    text-decoration: none;
    color:#222;
  }
  footer h5 {
    font-size:1.1em;
    color:#416691;
    font-weight:500;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    margin:0 0 10px;
  }
  footer p {
    line-height:1.6em;
    margin-bottom:0;
  }
  footer ul {
    margin:0;
    padding:0;
    list-style-type: none;
  }
  footer ul li {
    margin: 6px 0 0;
    padding: 6px 0 0;
  }
  footer .legal {
    background-color:#122E49;
    color:#FFF;
    box-sizing:border-box;
    display:block;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin:0;
    padding:20px 15px;
    line-height:1.4em;
  }
  footer .legal p {
    font-size:0.85em;
    margin:0;
  }
  @media (max-width: 781px) {
    footer .wrap .col {
      flex-basis: 50%;
    }
    footer .wrap .col:first-child,
    footer .wrap .col:last-child {
      flex-basis: 100%;
    }
  }
</style>