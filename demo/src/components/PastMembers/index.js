import React, { Component } from 'react'
import SectionA from '../SectionA'
import PastMemberElem from '../PastMemberElem'

var pastMembersArray = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5", "Person 6", "Person 7", "Person 8", "Person 9", "Person 10", "Person 11", "Person 12", "Person 13", "Person 14", "Person 15", "Person 16", "Person 17", "Person 18",
"Person 19", "Person 20", "Person 21", "Person 22", "Person 23", "Person 24", "Person 25", "Person 26", "Person 27", "Person 28", "Person 29", "Person 30"]

class PastMembers extends Component {
  generatePastMembers() {
    return pastMembersArray.map(member => {
      return <PastMemberElem name={member} />
    })
  }

  render() {
    return (
      <div>
        <SectionA
          heading="Past Members"
          tag="Maecenas pretium, lorem a tincidunt tincidunt, tortor risus tristique ipsum, vel porttitor metus dui non nisi. Integer ac velit faucibus, mattis neque in, aliquam odio. Pellentesque velit nisi, ullamcorper vel nisl hendrerit, efficitur ullamcorper dui. Donec a lacinia ante. Phasellus fringilla vel leo sed pretium. Vivamus in quam eget tellus tempus porttitor. Aenean id dolor vel ipsum gravida malesuada id eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque at facilisis erat. Quisque ut sapien ut justo mattis pulvinar. Etiam quis malesuada justo. Fusce bibendum tortor nec eros vestibulum, et lobortis quam fermentum. Curabitur orci risus, varius eu ultrices nec, euismod non massa."
          button="See Current Members"
          link="/members"/>
        <section>
          <ul id="pastmemberslist">
            { this.generatePastMembers() }
          </ul>
        </section>
      </div>
    )
  }
}

export default PastMembers
