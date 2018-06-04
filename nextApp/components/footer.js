export default () =>
  <div>
    <footer>
      ©2018<span>NickHuynh</span>&<span>ChrisShank</span>

      <style jsx>
        {`
          footer{
            background: black;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
            bottom: 0;
            color: white;
            width: 70vw;
            padding: 40px 0;
            position: absolute;
            right:15vw;
            text-align: center;
          }

          span {
            font-weight: 900;
          }
        `}
      </style>
    </footer>
  </div>