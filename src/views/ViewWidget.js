var dom = require('../doms');
var View = require('../baseView');

class ViewWidget extends View {
  constructor(props, children) {
    super(props, children);

    this.setIds([
      'id'
    ]);
  }

  render() {
    var params = this.props;
    var _this = this;
    params.__filename = params.__source.fileName  + ' :ln ' + params.__source.lineNumber;
    
    return (
      <view
        id={this.props.id?this.props.id:this.idSet.id}  
        params={params}>

        {this.children.map(function(child) {child.__filename = _this.__filename; return  child.render()})}
      </view>
    )
  }
}

module.exports = ViewWidget;