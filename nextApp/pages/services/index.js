import Link from 'next/link'

export default () =>
  <div>
    <h1>Services</h1>
    <ul>
      <li>
        <Link href="/services/gigs"><a>Click to go to the Gigs Page</a></Link>
      </li>
      <li>
        <Link href="/services/master_classes"><a>Click to go to the Master Classes Page</a></Link>
      </li>
    </ul>
  </div>