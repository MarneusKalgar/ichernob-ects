const { ECTS_TO_SCORE_MAP } = require("./constants");
class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    for (const [grade, range] of Object.entries(ECTS_TO_SCORE_MAP)) {
      const [min, max] = range;
      if (this.score >= min && this.score <= max) {
        return grade;
      }

      if (this.score > 100 || this.score < 0) {
        return "F";
      }
    }
  }
}

module.exports = ECTS;
