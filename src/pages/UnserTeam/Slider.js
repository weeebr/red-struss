const listItems = [
  { title: "step 1", content: "Break The UI Into A Component Hierarchy" },
  { title: "step 2", content: "Build A Static Version in React" },
  {
    title: "step 3",
    content: "Identify The Minimal (but complete) Representation Of UI State",
  },
  { title: "step 4", content: "Identify Where Your State Should Live" },
  { title: "step 5", content: "Add Inverse Data Flow" },
];

function SlideItem(props) {
  return (
    <div className="item-slide">
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
    </div>
  );
}

const Indicators = props => {
  const listIndicators = listItems.map((item, index) => (
    <li
      key={index}
      className={props.currentSlide === index ? "active" : ""}
      onClick={() => props.changeSlide(index)}
    >
      {index + 1}
    </li>
  ));
  return <ul className="indicators">{listIndicators}</ul>;
};

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideshow: props.slide,
      slideIndex: 0,
    };
    this.currentIndex = 0;
    this.pause = false;
  }

  componentDidMount() {
    var that = this;
    this.timeout = setTimeout(function() {
      that.goTo("auto");
    }, 3000);
  }

  componentDidUpdate() {
    var that = this;
    if (this.pause === true) {
      clearInterval(this.timeout);
      this.timePause = setTimeout(function() {
        clearInterval(this.timePause);
      }, 8000);
      this.pause = false;
    }
    this.timeout = setTimeout(function() {
      that.goTo("auto");
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  goTo = direction => {
    let index = 0;
    switch (direction) {
      case "auto":
        index = this.currentIndex + 1;
        this.currentIndex = index >= listItems.length ? 0 : index;
        break;
      case "prev":
        index = this.currentIndex - 1;
        this.currentIndex = index < 0 ? listItems.length - 1 : index;
        this.pause = true;
        break;
      case "next":
        index = this.currentIndex + 1;
        this.currentIndex = index >= listItems.length ? 0 : index;
        this.pause = true;
        break;
      default:
        this.currentIndex = direction;
        this.pause = true;
        break;
    }
    console.log("pause:", this.pause);
    this.setState({
      slideIndex: this.currentIndex,
      slideshow: listItems[this.currentIndex],
    });
  };

  render() {
    return (
      <div className="slideshow-simple">
        <SlideItem
          title={this.state.slideshow.title}
          content={this.state.slideshow.content}
        />
        <Indicators
          changeSlide={this.goTo} // function
          currentSlide={this.state.slideIndex}
        />
        <div className="wrap-control">
          <button
            className="btn btn-prev"
            value="Prev"
            onClick={() => this.goTo("prev")}
          >
            Prev
          </button>
          <button
            className="btn btn-next"
            value="Next"
            onClick={() => this.goTo("next")}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const element = <Slides slide={listItems[0]} />;

ReactDOM.render(element, document.getElementById("root"));
