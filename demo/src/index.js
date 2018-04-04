import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function NavItem(props) {
	if (props.isActive) {
		return (
			<li className="nav-item active-tab">
				<a className="nav-link" href={props.targetPage}>{props.value}<span class="sr-only">(current)</span></a>
			</li>
		);
	} else {
		return (
			<li className="nav-item">
				<a className="nav-link" href={props.targetPage}>{props.value}<span class="sr-only">(current)</span></a>
			</li>
		);
	}
}

function renderNavItem(active, v, href) {
	return (
		<NavItem 
			value={v} 
			isActive={active} 
			targetPage={href}/>
	);
}

function NavBar(props) {
	return (
		<nav class="navbar fixed-top navbar-expand-lg bg-medium-dark">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"><img src="https://shift8-stardothostingin.netdna-ssl.com/wp-content/uploads/2016/01/menu-512.png"></img></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					{renderNavItem(true, "Home", "index.html")}
					{renderNavItem(false, "News", "news.html")}
					{renderNavItem(false, "History", "history.html")}
					{renderNavItem(false, "Members", "members.html")}
					{renderNavItem(false, "Services", "services.html")}
					{renderNavItem(false, "Repertoire", "repertoire.html")}
					{renderNavItem(false, "Contact Us", "contact.html")}
				</ul>
			</div>
		</nav>
	);
}

function Header(props) {
	return (
		<header id="showcase" class="grid">
			<div class="bg-image">
			</div>
			<div class="content-wrap">
				<h1>What's New with A Minor?</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus non magna sed laoreet. Morbi non metus sit amet ante pharetra rhoncus. Mauris volutpat leo odio, vitae mollis justo luctus nec. In et dignissim sem, ut viverra dui. Phasellus eget aliquam quam. Donec commodo vitae metus vitae congue. Sed pellentesque tortor quis suscipit sagittis. Suspendisse scelerisque, lacus varius tempor congue, arcu elit rutrum massa, sed mollis velit risus sollicitudin ex. Donec sollicitudin luctus ex, id dignissim eros gravida eget. Donec eu vehicula leo, vel vestibulum dolor. Mauris tempus condimentum est vitae varius. Vivamus elit tellus, molestie sit amet tristique eget, fringilla at tortor. Cras est lorem, fringilla vitae egestas eget, scelerisque et ex.</p>
				<p>In real implementation, make this a showcase slidey boy</p>
				<a href="news.html" class="btn">Read More</a>
			</div>
		</header>
	);
}

function SectionA(props) {
	
}

function SectionB(props) {
	
}

function SectionC(props) {
	
}

function SectionD(props) {
	
}

function SectionE(props) {
	
}

function Footer(props) {
	return (
		<footer id="main-footer" class="grid">
			<div>A Minor A Capella</div>
			<br></br>
			<div>Project By <a href="#" target="_blank">Nick Huynh</a></div>
		</footer>
	);
}

function Card(props) {
	
}

class Main extends React.Component {
	renderNavBar(props) {
		return (
			<NavBar />
		);
	}
	
	renderFooter(props) {
		return (
			<Footer 
			
			/>
		);
	}
	
	renderHeader(props) {
		return(
			<Header />
		);
	}
	
	render() {
		return (
		<div>
		{this.renderNavBar()}
	
		{this.renderHeader()}
		
		<main id="main">
			<section id="section-a" class="grid">
				<div class="content-wrap">
					<h2 class="content-title">About Us</h2>
					<div class="content-text">
						<p>Maecenas pretium, lorem a tincidunt tincidunt, tortor risus tristique ipsum, vel porttitor metus dui non nisi. Integer ac velit faucibus, mattis neque in, aliquam odio. Pellentesque velit nisi, ullamcorper vel nisl hendrerit, efficitur ullamcorper dui. Donec a lacinia ante. Phasellus fringilla vel leo sed pretium. Vivamus in quam eget tellus tempus porttitor. Aenean id dolor vel ipsum gravida malesuada id eu felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque at facilisis erat. Quisque ut sapien ut justo mattis pulvinar. Etiam quis malesuada justo. Fusce bibendum tortor nec eros vestibulum, et lobortis quam fermentum. Curabitur orci risus, varius eu ultrices nec, euismod non massa.</p>
					</div>
				</div>
			</section>
			
			<section id="section-b" class="grid">
				<ul>
					<li>
						<div class="card">
							<img src="https://picsum.photos/900/350/?image=524" alt=""></img>
							<div class="card-content">
								<h3 class="card-title">Services We Provide</h3>
								<p>Nulla dictum faucibus mauris, iaculis ullamcorper est elementum nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris mauris diam, condimentum ut tempus non, maximus et felis. Curabitur ultricies eros vel imperdiet rutrum. Aliquam accumsan nulla nec purus laoreet placerat imperdiet sit amet velit. Phasellus enim felis, ultricies quis iaculis nec, lobortis ut tortor. Nunc in ex condimentum, cursus ex faucibus, tristique orci. Nunc condimentum nisl ac varius suscipit.</p>
								<a href="services.html" class="btn">See More about Services</a>
							</div>
						</div>
					</li>
				</ul>
			</section>
			
			<section id="section-c" class="grid">
				<div class="content-wrap">
					<h2 class="content-title">Book Us Today!</h2>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</div>
			</section>
			
			<section id="section-d" class="grid">
				<div class="box">
					<h2 class="content-title">Contact Us</h2>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
					<p>uconnaminor@gmail.com</p>
				</div>
			</section>
			
			<section id="section-e" class="grid">
				<div class="box">
					<h2 class="content-title">Follow us on Social Media</h2>
					<p>Donec sed nisi nisi. Nam ultrices, leo et hendrerit consequat, mi elit pretium felis, varius venenatis justo mauris sit amet lectus. Etiam dolor dolor, iaculis in ornare ut, vestibulum sit amet nibh. Nullam gravida pellentesque ex id semper. Duis eu fringilla ante. Nulla facilisi. Phasellus sed nibh vitae quam viverra gravida. Aenean volutpat ultricies nunc, quis porttitor mi porta eu. Praesent sollicitudin pellentesque pretium. Aenean non sapien vulputate, pretium eros in, consectetur nisi. Proin non pretium tortor, ac vestibulum neque. Aenean nec lorem erat. Morbi eleifend mattis lacinia. Nulla in urna fermentum, sagittis diam sit amet, auctor nulla. Aenean a mauris sem.</p>
				</div>
			
			</section>
		</main>
		
		{this.renderFooter()}
	</div>
		);
	}
}

ReactDOM.render(
	<Main />, document.getElementById('root')
);