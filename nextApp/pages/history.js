import fetch from "isomorphic-fetch";

const people = [
	{
		name: 'Dave "Plommy" Plamondon',
		dates: 'June 6, 1990 - March 22, 2011',
		text: [
			'On March 22nd, 2011 A Minor lost 3-year member Dave Plamondon.',
			'Dave was an incredible beatboxer, a beautiful baritone, an arranger with a unique ear, a driven member of the group, a straight-A student (even as a physiology and neurobiology major!) and above all, a wonderful wonderful friend. ',
			'A Minor was fortunate to have had three hilarious and fun-filled years with Dave, and his sense of humor, drive for perfection and bear hugs will live on with the group and its alumni forever.',
			'One of the last songs Dave sang with A Minor was Coldplay\'s "Fix You", a moving song about coming to terms with loss. In honor of Dave, A Minor has kept "Fix You" in our repertoire. We encourage any and all alumni to join us in singing this song whenever possible.'
		],
		image: 'http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/3366762_orig.jpg',
		alt: 'Photo of Dave Plommy'
	},
	{
		name: 'Kyunga "Katie" Bu',
		dates: 'December 14th, 1985 - October 22nd, 2006',
		text: [
			'From the Katie Bu Memorial Fund:',
			'Kyunga “Katie” Bu was a believer in the power that we have to transform our energies, to pass along the life we have in us to help each other and to solve environmental problems.',
			'Born in Korea, she joined her mother in the United States when she was 14. She was fluent in Korean, Japanese, and English, gifted in music and graphic arts, and adept in origami. She consistently earned scholarships and awards for excellence in the study of science and language. She also had a passion for helping others succeed, realizing that her energy radiated outwards and charged those in her vicinity. ',
			'Katie was a student in the Honors Program and was pursuing dual degrees in Environmental Science and Natural Resources. Her life was tragically cut short in her Junior year.',
			'Katie was a beloved member of our a cappella group and she will always have an impact on our A Minor family.'
		],
		image: 'http://uconnaminor.weebly.com/uploads/3/2/7/8/3278517/8324617.jpg?1424901525',
		alt: 'Photo of Katie Bu'
	}
]

function generateSection(people) {
	return people.map((person) => {
		return (
			<section className="section-f grid">
				<div className="content-wrap">
					<div className="left-side">
						<h5><b>{person.name}</b></h5>
						<h6>{person.dates}</h6>
						{ person.text.map((paragraph) => <p>{paragraph}</p>) }
					</div>
					<div className="right-side">
						<img src={person.image} alt={person.alt} />
					</div>
				</div>
			</section>
		)
	})
}

const HISTORY_PAGE = ({ history }) => (
	<div>
		<section className='section-a grid'>
			<div>
				<br />
					<h2 className='content-title'>Our History</h2>
			</div>
		</section>

		<section className='section-f grid'>
			<div className="content-wrap">
				<h3 className="content-subtitle">Our Origins</h3>
				<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				<h4>"Fix You" o.p.b Coldplay in loving memory of...</h4>
			</div>
		</section>

		{ generateSection(people) }

		<style jsx>
		{
			`
				img {
					display: block;
					width: 100%;
					height: cover;
				}

				h1, h2, h3, h4 {
					margin: 0px;
					padding: 1em 0;
				}

				h5 {
					margin: 0px;
					padding: .5em 5% 0 5%;
				}

				h6 {
					margin: 0px;
					padding: .25em 5% 1em 5%;
				}

				#section-a {
					background: #eaeaea;
					color: #333;
					padding-bottom: 2em;
				}

				#section-f {
					text-align: center;
					background: #fff;
					color: #333;
					padding: 2em 6em 2em 6em;
				}

				#section-f .left-side p {
					padding-top: .5em;
					padding-bottom: .5em;
					color: #666;
				}

				#section-f .right-side {
					padding-top: 2em;
					margin-right: auto;
					margin-left: auto;
				}

				@media(min-width: 700px) {
					.grid {
						display: grid;
						grid-tempolate-columns: 1fr repeat(2, minmax(auto, 45em)) 1fr;
					}

					#section-a .content-text {
						columns: 1;
						column-gap: 2em;
					}

					#section-a .content-text p {
						padding-top: 0;
					}

					#section-f {
						text-align: left;
					}

					#section-f .left-side {
						width: 60%;
						border-left: 1px solid #ccc;
						float: left;
					}

					#section-f .right-side {
						padding-top: 0;
						width: 35%;
						float: right;
					}

					#section-f .right-side img {
						margin-top: auto;
						margin-bottom: auto;
						margin-left: auto;
						margin-right: auto;
					}
				}
			`
		}
		</style>
	</div>
)

/*HISTORY_PAGE.getInitialProps = async () => {
	const response  = await fetch('https://0zw0wj7m2i.execute-api.us-east-1.amazonaws.com/TestGet/content?page=history')
	const data = await response.json()
	const history = data.message.content
	return { history }
}*/

export default HISTORY_PAGE
