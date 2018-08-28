import HistorySection from '../components/history-section';
import DescriptionBox from '../components/description-box';

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
		image: '../static/images/plommy_photo.png',
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
		image: '../static/images/katie_photo.png',
		alt: 'Photo of Katie Bu'
	}
];

export default () => (
	<div>
		<DescriptionBox bgColor="#eaeaea">
			<h1>Our History</h1>
			<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
			<h4>"Fix You" o.p.b Coldplay in loving memory of...</h4>
		</DescriptionBox>

		<HistorySection people={people}></HistorySection>
	</div>
);
