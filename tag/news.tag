<news>
  <h1>ニュース</h1>
  <div class="newsList">
    <div class="news" each={ items }>
      <h2>
        { title }
      </h2>
      <div>
        <img src="{ image }" />
      </div>
      <p>{ displayPubDate }</p>
    </div>
  </div>
  <script>
    var self = this;
    self.items = [];
    var url = 'http://s.mognavi.jp/do/api/blog/list?offset=0&limit=10';
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        Array.prototype.push.apply(self.items, data[0].list);
        self.update();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  </script>
</news>
