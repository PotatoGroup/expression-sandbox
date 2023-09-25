const polyfill = () => {
  if (!String.prototype.matchAll) {
    String.prototype.matchAll = function (regexp: RegExp) {
      const matches = [];
      let match: any;
      while ((match = regexp.exec(this)) != null) {
        matches.push(match);
      }
      return matches;
    };
  }
};

export { polyfill };
