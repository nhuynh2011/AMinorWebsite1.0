import React, { Component } from 'react'

import ThinLineBreak from '../ThinLineBreak'
import SectionA from '../SectionA'
import SectionG from '../SectionG'


var igniteSongList = [
  ["Irresistible (4:33)",
    "Fall Out Boy (feat. Demi Lovato)",
    "Danielle Wrubel and Jessica Fernandes",
    "Jeremiah Merkel"],
  ["Wildest Dreams (3:46)",
    "Taylor Swift",
    "Rachel Conte",
    "Jeremiah Merkel"],
  ["Talking Habits (3:34)",
    "Tove Lo",
    "Jeremiah Merkel and Narineh Torosyan",
    "Jeremiah Merkel"],
  ["Gold (2:50)",
    'from the Broadway musical "Once"',
    "Ensemble",
    "David Moul"],
  ["Control (3:38)",
    "Halsey",
    "Andria Benvenuto",
    "Jessica Fernandes and Jeremiah Merkel"],
  ["See You Again (4:29)",
    "Wiz Khalifa (feat. Charlie Puth)",
    "Eliana Giordano and Ivan Paz",
    "Jeremiah Merkel and Nicholas Tan"],
  ["Bieber Medley (5:49)",
    "Justin Bieber and Selena Gomez",
    "Jeremiah Merkel, Lauren Drainville, Bobby Wyman and Matt Brandt",
    "Jeremiah Merkel"],
  ["Elastic Heart (4:20)",
    "Sia",
    "Rachel Conte",
    "Jeremiah Merkel"],
  ["New Year's Day (3:39)",
    "Pentatonix",
    "Andria Benvenuto",
    "Jessica Fernandes"],
  ["American Boy (2:56)",
    "Estelle (feat. Kanye West)",
    "Lauren Drainville and Nick Tambini",
    "VJ Rosales"],
  ["I Was Here (2:43)",
    "Beyoncé",
    "Narineh Torosyan",
    "Jessica Fernandes and Jeremiah Merkel"],
]

var igniteDetails = [
  ["We are so grateful to all who were involved in the making of this album -- thank you SO much, we could not have done it without your support and guidance!"],
  ["Album funded by the Undergraduate Student Government (USG) at the University of Connecticut."]
]

var incognitoSongList = [
  ["Beyoncé Medley (5:47)",
    "Beyoncé & Destiny's Child",
    "Jasmine Kehrhahn, Mandy Cook, Taylor Meltzer, Justine Nixon and Caroline Cacciola",
    "Noah Berg"],
  ["The Chain (3:18)",
    "Ingrid Michaelson",
    "Jasmine Kehrhahn",
    "Amanda Friedman"],
  ["Ragged Wood (3:15)",
    "Fleet Foxes",
    "Paul Banach",
    "Paul Banach"],
  ["King of Anything (3:23)",
    "Sara Bareilles",
    "Justine Nixon",
    "Mandy Cook"],
  ["Cry Me A River (4:59)",
    "Justin Timberlake",
    "Simon Abrahms",
    "Mandy Cook"],
  ["Gavin's Song (2:45)",
    "Marc Broussard",
    "Taylor Meltzer",
    "Jenny Bunce"],
  ["The Lion King Medley (6:27)",
    "Hanz Zimmer, et. al.",
    "Lauren Arcement, Jasmine Kehrhahn, Taylor Meltzer, Connor Sullivan, Cody White and Adam Bstrom",
    "UW Madhatters"],
  ["Fix You (4:06)",
    "Coldplay",
    "Jasmine Kehrhahn",
    "Jasmine Kehrhahn"],
  ["It Don't Have to Change (2:58)",
    "John Legend",
    "Cody White",
    "Laura Weismantel"],
  ["Free Ride (2:43)",
    "Edgar Winter Group",
    "Connor Sullivan",
    "Mandy Cook"],
]

var incognitoDetails = [
  ["Many thanks to Angela, Dave and Jackson for all of your help."],
  ["Album funded by the Undergraduate Student Government (USG) at the University of Connecticut and distributed for at no profit."]
]

var discographyTag = [
  ["Here's some of our music, past and present!  Over the years, A Minor​ has had the opportunity to professionally record music and produce several awesome albums. However, the cost of creating an album (including studio time, mixing, and mastering) can cost up to $10,000."],
  ["We appreciate any and all contributions."]
]

class Discography extends Component {
  render() {
    return (
      <div>
        <SectionA
          heading="Our Discography"
          tag={discographyTag} />
        <SectionG
          heading="Ignite (2016)"
          tag="Available now on iTunes, Apple Music and Spotify"
          songs={igniteSongList}
          image="./images/albumcovers/ignite-final-cover-artwork_orig.jpg"
          title="Ignite"
          release="December 2, 2016"
          art="Mai Walters"
          mixing="Liquid 5th Productions"
          mastering="Eric Scholz"
          details={igniteDetails} />
        <ThinLineBreak />
        <SectionG
          heading="Incognito (2012)"
          tag="Available for FREE DOWNLOAD!"
          songs={incognitoSongList}
          image="./images/albumcovers/incognito-final-cover-artwork.jpg"
          title="Incognito"
          release="November 26th, 2012"
          art="Jackson Tsai '12"
          mixing="Angela Ugolini | The Vocal Company"
          mastering="Dave Sperandio | Diovoce"
          details={incognitoDetails} />
      </div>
    )
  }
}

export default Discography
