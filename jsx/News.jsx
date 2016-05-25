var NewsList = React.createClass({
  render: function() {
    var newsNodes = this.props.data.map(function(news) {
      return (
        <News key={news.pageId} title={news.title} description={news.displayPubDate} img={news.image}></News>
      );
    });
    return (
      <div className="newsList">
        {newsNodes}
      </div>
    );
  }
});

var News = React.createClass({
render: function() {
  return (
    <div className="news">
      <h2>
        {this.props.title}
      </h2>
      <div>
        <img src={this.props.img} />
      </div>
      <p>{this.props.description}</p>
    </div>
  );
}
});

var NewsBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data[0].list});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="newsBox">
        <h1>ニュース</h1>
        <NewsList data={this.state.data} />
      </div>
    );
  }
});
