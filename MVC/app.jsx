// ``import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';``

class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">	
      	<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>
			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Teachers extends React.Component {
	render() {
		return (
	<div class="container">
    <div className="row">
      <div className="col-sm-6">
        <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png" alt="teacher"/>
          <h3>Angie McAngular</h3>
        <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p></div>
      <div className="col-sm-6">
          <img className="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png" alt="teacher"/>
          <h3>NodeStradamus</h3>
          <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
          <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png" alt="teacher"/>
          <h3>Geo 'Lo' Cation</h3>
          <p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
      </div>
      <div className="col-sm-6">
          <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png" alt="teacher"/>
          <h3>Ecma Scriptnstuff</h3>
          <p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
      </div>
    </div>


    <div className="row">
      <div className="col-sm-6">
          <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" alt="teacher"/>
          <h3>Jay Query</h3>
          <p>Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.</p>
      </div>
      <div className="col-sm-6">
        <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" alt="teacher"/>
        <h3>Json Babel</h3>
        <p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
      </div>
    </div>
</div>

  	);
	}
}



class Courses extends React.Component {
	constructor(props){
    super(props);
    this.html = [
      {
        url:"https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",
        title: "How to Make a Website",
        text: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
       
      },
       {
        url:"https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png",
        title: "HTML Forms",
        text:"The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis"
      },
      {
        url: "https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png" ,
        title:"HTML Video and Audio",
        text:"Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
      },
      {
        url:"https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png" ,  
        title:"SVG Basics",
        text:"Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density"
      }
     ];
}  

render() {
		return (
        <section>
			<div class="main-content courses">
        <div class="course-header group">
          <h2>Courses</h2>
            <ul class="course-nav">
              <li><a aria-current="true" href="#/about" class="active">HTML</a>
              </li>
              <li><a aria-current="false" href="/courses/css">CSS</a>
              </li>
              <li><a aria-current="false" href="/courses/javascript">JavaScript</a></li>
            </ul>
         </div>
        </div>

        	<div class="container">
        <div className="row">
      <div className="col-sm-6">
          <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png" alt="teacher"/>
          <h3>Jay Query</h3>
          <p>Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.</p>
      </div>
      <div className="col-sm-6">
        <img class="teacher-img" src="http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png" alt="teacher"/>
        <h3>Json Babel</h3>
        <p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
      </div>
    </div>
</div>
</section>
    );


}
}







class Repos extends React.Component {
	render() {
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li><a href='/courses/html'>HTML</a></li>
						<li><a href='/courses/css'>CSS</a></li>
						<li><a href='/courses/javascript'>JavaScript</a></li>
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
      case '/teachers':
				Child = Teachers;
				break;
      case '/courses':
				Child = Courses;
				break;
        
			case '/repos':
				Child = Repos;
				break;
			default:
				Child = Home;
		}
		return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#/home">Home</a></li>
            <li><a href="#/about">ABOUT</a></li>
            <li><a href="#/teachers">TEACHERS</a></li>
            <li><a href="#/courses">COURSES</a></li>
          </ul>
        </div>
      </nav>
    <Child />{' '}
  </div>
 		);
	}
}       
         
ReactDOM.render(<App/>,
document.getElementById('root1')); 