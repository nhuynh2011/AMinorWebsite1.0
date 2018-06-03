import Link from 'next/link'
import Head from '../components/head'

export default () => (
  <div>
    <Head title="Home" />
    Home
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

    <style jsx> {`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `} </style>
  </div>
)
