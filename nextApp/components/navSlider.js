import { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="navSlider">
        <style jsx>
          {`
            .navSlider {
              background: #4C7FB2;
              border-radius: 10px;
              height: 30px;
              position: absolute;
              top: 17.5px;
              left: 0;
              transform: translateX(${this.props.xOffset + "px"});
              transition: transform var(--page-transition) ease-in-out,
                          width var(--page-transition) ease-in-out;
              width: ${this.props.width + "px"};
              z-index: 2;
            }
          `}
        </style>
      </div>
    )
  }
}