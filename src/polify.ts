const polyfill = () => {
  if (!String.prototype.matchAll) {
    //@ts-ignore
    String.prototype.matchAll = function (regexp: RegExp) {
      const matches = [];
      let match: any;
      //@ts-ignore
      while ((match = regexp.exec(this)) != null) {
        matches.push(match);
      }
      return matches;
    };
  }
};

export { polyfill };
