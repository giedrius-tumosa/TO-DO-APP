export default class Element {
  // obj keys - tag, text, attributes(obj), nested(obj array, el to nest), nestedCount(count of nested obj)
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render = () => {
    if (this.props.tag) {
      this.htmlElement = document.createElement(`${this.props.tag}`);
      if (this.props.text) {
        this.textElement = document.createTextNode(this.props.text);
        this.htmlElement.append(this.textElement);
      }
      if (this.props.attributes) {
        // jeigu attributes yra objektas
        Object.keys(this.props.attributes).forEach(raktas => {
          this.htmlElement.setAttribute(raktas, this.props.attributes[raktas]);
        });
      }
      if (this.props.nested) {
        const howManyNested = this.props.nestedCount ? this.props.nestedCount : 1;
        for (let i = 0; i < (howManyNested); i++) {
          this.props.nested.forEach(el => {
            const nestedElement = new Element(el);
            this.htmlElement.append(nestedElement);
          });
        }
      }
      return this.htmlElement;
    } else {
      console.log(`Nenurodei elemento tago.`);
      console.dir(this);
    }
  };
}