import Link from 'next/link'

export default () =>
  <ul>
    <li>
      <Link href="/news"><a>Click to go to the News Page</a></Link>
    </li>
    <li>
      <Link href="/history"><a>Click to go to the History Page</a></Link>
    </li>
    <li>
      <Link href="/members"><a>Click to go to the Members Page</a></Link>
    </li>
    <li>
      <Link href="/services"><a>Click to go to the Services Page</a></Link>
    </li>
    <li>
      <Link href="/repertoire"><a>Click to go to the Repertoire Page</a></Link>
    </li>
  </ul>